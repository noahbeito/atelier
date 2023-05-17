import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'underscore';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarRating from '../../../components/StarRating';
import Icons from '../../../components/Icons';

const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const StyledContent = styled.div`
  position: relative;
  display: grid;
  padding: 0 1rem 1rem 1rem;
  border-radius: 3px;
  background-color: white;
  grid-template-rows: 10% 10% 80%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  height: 400px;
  width: 600px;
  overflow-y: auto;
  z-index: 20;
`;

const StyledTitle = styled.div`
  grid-area: 1 / 0 / span 1 / span 1;
  margin-top: 1rem;
`;

const StyledCurrent = styled.div`
  grid-area: 2 / 1 / span 1 / span 2;
  justify-self: center;
  text-align: center;
  font-weight: bold;
  position: sticky;
  margin-top: 1rem;
`;

const StyledCompare = styled.div`
  grid-area: 3 / 3 / span 1 / span 1;
  justify-self: center;
  text-align: center;
`;

const StyledRelated = styled.div`
  grid-area: 2 / 4 / span 1 / span 2;
  justify-self: center;
  text-align: center;
  font-weight: bold;
  position: sticky;
  margin-top: 1rem;
`;

const StyledCharacteristic = styled.div`
  margin-top: 1rem;
`;

const StyledCurrentAttributes = styled.div`
  grid-area: 3 / 1 / span 1 / span 2;
  justify-self: center;
  text-align: center;
`;

const StyledCompareAttributes = styled.div`
  grid-area: 3 / 4 / span 1 / span 2;
  justify-self: center;
  align-self: start;
  text-align: center;
`;

const StyledWrap = styled.div`
  margin-top: 1rem;
`;

const StyledXButton = styled.button`
  grid-area: 1 / 5 / span 1 / span 1;
  justify-self: end;
  text-align: end;
  position: fixed;
  cursor: pointer;
  border: none;
  background: none;
  margin-top: 1rem;
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: scale(1.5)
  }
`;

export default function ComparisonModal({
  modalOnClose,
  characteristics,
  compare,
  compareName,
  currentFeatures,
  compareFeatures,
}) {
  const [allCharacteristics, setAllCharacteristics] = useState([]);
  const [currentAttributes, setCurrentAttributes] = useState([]);
  const [compareAttributes, setCompareAttributes] = useState([]);
  const [allFeatures, setAllFeatures] = useState([]);
  const [currentFeaturesArray, setCurrentFeaturesArray] = useState([]);
  const [compareFeaturesArray, setCompareFeaturesArray] = useState([]);
  const currentProduct = useSelector((state) => state.product.data.name);

  useEffect(() => {
    const all = _.uniq(Object.keys(characteristics).concat(Object.keys(compare)));
    const charObj = {};
    const compObj = {};
    all.forEach((characteristic) => {
      if (characteristics[characteristic] === undefined) {
        charObj[characteristic] = 'x';
      } else {
        charObj[characteristic] = characteristics[characteristic];
      }
      if (compare[characteristic] === undefined) {
        compObj[characteristic] = 'x';
      } else {
        compObj[characteristic] = compare[characteristic];
      }
    });
    console.log('CHAR OBJ:', charObj);
    console.log('COMP OBJ:', compObj);
    setAllCharacteristics(all);
    setCurrentAttributes(Object.values(charObj));
    setCompareAttributes(Object.values(compObj));
    let features = currentFeatures.concat(compareFeatures);
    features = features.map((feature) => (feature.feature));
    setAllFeatures(_.uniq(features));
    const currFeatures = currentFeatures.map((feat) => (feat.value));
    setCurrentFeaturesArray(currFeatures);
    const compFeatures = compareFeatures.map((feat) => (feat.value));
    setCompareFeaturesArray(compFeatures);
  }, []);

  return (
    <StyledModal onClick={() => modalOnClose()}>
      <StyledContent onClick={(e) => e.stopPropagation()}>
        <StyledTitle>Comparing</StyledTitle>
        <StyledCurrent>{currentProduct}</StyledCurrent>
        <StyledRelated>{compareName}</StyledRelated>
        <StyledCompare>
          {allCharacteristics.map((characteristic) => (
            <StyledCharacteristic key={characteristic}>{characteristic}</StyledCharacteristic>
          ))}
          {allFeatures.map((feature) => (
            <StyledCharacteristic key={feature}>{feature}</StyledCharacteristic>
          ))}
        </StyledCompare>
        <StyledCurrentAttributes>
          {currentAttributes.map((attribute) => (
            <StyledWrap>
              {
                attribute === 'x' ? <br /> : <StarRating key={attribute.id} rating={attribute.value} />
              }
            </StyledWrap>
          ))}
          {currentFeaturesArray.map((feat) => (
            <StyledWrap key={feat}>{feat}</StyledWrap>
          ))}
        </StyledCurrentAttributes>
        <StyledCompareAttributes>
          {compareAttributes.map((attribute) => (
            <StyledWrap>
              {
                 attribute === 'x' ? <br /> : <StarRating key={attribute.id} rating={attribute.value} />
              }
            </StyledWrap>
          ))}
          {compareFeaturesArray.map((feat) => (
            <StyledWrap key={feat}>{feat}</StyledWrap>
          ))}
        </StyledCompareAttributes>
        <StyledXButton>
          <Icons.X onClick={() => modalOnClose()} />
        </StyledXButton>
      </StyledContent>
    </StyledModal>
  );
}

ComparisonModal.propTypes = {
  modalOnClose: PropTypes.func.isRequired,
  characteristics: PropTypes.shape({
    characteristic: PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }),
  compare: PropTypes.shape({
    characteristic: PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }),
  compareName: PropTypes.string.isRequired,
  currentFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  compareFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

ComparisonModal.defaultProps = {
  characteristics: {},
  compare: {},
  currentFeatures: [],
  compareFeatures: [],
};
