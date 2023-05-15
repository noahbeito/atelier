import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SizeDropdown from './SizeDropdown/SizeDropdown';
import QuantityDropdown from './QuantityDropdown/QuantityDropdown';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  /* border: solid 2px black; */
  margin:0px;
  padding:0px;
`;
const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
`;
export default function DropdownContain({ defaultNumber }) {
  const [currentValue, setCurrentValue] = useState('');
  const isLoading = useSelector((state) => state.product.isLoading
                                        || state.overview.productStyles.loading);

  // const styles = useSelector((state) => {
  //   if (state.overview.productStyles.styles.results) {
  //     // list = state.overview.productStyles.styles.results;
  //     return state.overview.productStyles.styles.results;
  //   }
  //   return [];
  // });
  // console.log('This is styles in dropContain:', styles);
  // console.log('This is defaultNumber:', defaultNumber);
  // useEffect(() => {
  //   if (defaultNumber !== 1) {
  //     // console.log('its working default is not 1: ', defaultNumber);
  //     const value = styles.filter((element) => element.style_id === defaultNumber);
  //     setDropdownValue(value[0].skus);
  //   }
  // }, [defaultNumber]);
  // console.log('This is dropdown:', dropDownValue);
  return (
    <StyledDiv>
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            <SizeDropdown setCurrentValue={setCurrentValue} defaultNumber={defaultNumber} />
            <QuantityDropdown currentValue={currentValue} defaultNumber={defaultNumber} />
          </>
        )}
    </StyledDiv>
  );
}

DropdownContain.propTypes = {
  defaultNumber: PropTypes.number.isRequired,
};
