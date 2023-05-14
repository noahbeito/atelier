import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'underscore';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  background-color: #CDCDCD;
  grid-template-rows: 10% 10% 80%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  height: 400px;
  width: 500px;
  z-index: 20;
`;

const StyledTitle = styled.div`
  grid-area: 1 / 0 / span 1 / span 1;
`;

const StyledCurrent = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  justify-self: start;
  position: sticky;
`;

const StyledCompare = styled.div`
  grid-area: 3 / 3 / span 1 / span 1;
  justify-self: center;
  text-align: center;
`;

const StyledRelated = styled.div`
  grid-area: 2 / 5 / span 1 / span 1;
  justify-self: end;
  text-align: right;
  position: sticky;
`;

export default function ComparisonModal({
  modalOnClose, characteristics, compare, compareName,
}) {
  const [allCharacteristics, setAllCharacteristics] = useState([]);
  const currentProduct = useSelector((state) => state.product.data.name);

  useEffect(() => {
    setAllCharacteristics(_.uniq(Object.keys(characteristics).concat(Object.keys(compare))));
  }, []);

  return (
    <StyledModal onClick={() => modalOnClose()}>
      <StyledContent onClick={(e) => e.stopPropagation()}>
        <StyledTitle>Comparing</StyledTitle>
        <StyledCurrent>{currentProduct}</StyledCurrent>
        <StyledRelated>{compareName}</StyledRelated>
        <StyledCompare>
          {allCharacteristics.map((characteristic) => (
            <div key={characteristic}>{characteristic}</div>
          ))}
        </StyledCompare>
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
};

ComparisonModal.defaultProps = {
  characteristics: {},
  compare: {},
};
