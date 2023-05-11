import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddToCart from '../AddToCart/AddToCart';
import StyleSelector from '../StyleSelector/StyleSelector';
import DropdownContain from '../DropdownContain/DropdownContain';
// import StarRating from '../../../components/StarRating';

const StyledDiv = styled.div`
  /* width: 40%; */
  width: 450px;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: solid 2px black; */
  margin:2px;
  padding:5px;
  border-left:solid 1px black;
`;
const StyledProductDetails = styled.div`
  /* width: 40%; */
  width: 98%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  /* border: solid 2px black; */
  margin:2px;
  padding:5px;

`;
const StyledSection = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  /* border: solid 2px blue; */
  padding:2px;
`;

export default function ProductDisplay({
  defaultHandler,
  defaultNumber,
  defaultNumberHandler,
}) {
  return (
    <StyledDiv>
      <StyledProductDetails>
        {/* <StarRating rating={3} className="StarRating" /> */}
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Social Media links</p>
      </StyledProductDetails>
      <StyleSelector
        defaultHandler={defaultHandler}
        defaultNumber={defaultNumber}
        defaultNumberHandler={defaultNumberHandler}
      />
      <StyledSection>
        <DropdownContain />
        <AddToCart />
      </StyledSection>
    </StyledDiv>
  );
}
ProductDisplay.propTypes = {
  defaultHandler: PropTypes.func.isRequired,
  defaultNumberHandler: PropTypes.func.isRequired,
  defaultNumber: PropTypes.number.isRequired,
};
