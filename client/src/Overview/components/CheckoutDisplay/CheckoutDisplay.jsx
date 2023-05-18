import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddToCart from '../AddToCart/AddToCart';
import StyleSelector from '../StyleSelector/StyleSelector';
import DropdownContain from '../DropdownContain/DropdownContain';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Ratings from './Ratings';

const StyledDiv = styled.div`
  width: 450px;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin:2px;
  padding:5px;
  border-left:solid 1px black;
`;
const StyledReview = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
&.ratingtext {
  color: black;
}
`;
const StyledProductDetails = styled.div`
  width: 98%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  margin:2px;
  padding:5px;
.category {
  font-family: sans-serif;
}
.name {
  font-family: sans-serif;
  font-size: 40px;
}
.slogan {
  font-family: serif;
}
`;
const StyledSection = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding:2px;
`;
const StyledSocialMedia = styled.section`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

export default function ProductDisplay({
  product,
  defaultHandler,
  defaultNumber,
  defaultNumberHandler,
}) {
  const [sku, setSku] = useState(0);
  const [numOfOrders, setNumOfOrders] = useState(0);
  const [currentItem, setCurrentItem] = useState({});
  useEffect(() => {
    axios.get(`/products/${product}`)
      .then((result) => {
        setCurrentItem(result.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [product]);
  return (
    <StyledDiv>
      <StyledProductDetails>
        <StyledReview>
          <Ratings />
          <a className="ratingtext" href="#ratingsReview">Ratings & Reviews</a>
        </StyledReview>
        <p className="category">{currentItem.category}</p>
        <div>
          <p className="name">{currentItem.name}</p>
          <p className="defaultprice">{currentItem.default_price}</p>
        </div>
        <p className="slogan">{currentItem.slogan}</p>
        <StyledSocialMedia>
          <Twitter />
          <Facebook />
        </StyledSocialMedia>
      </StyledProductDetails>
      <StyleSelector
        defaultHandler={defaultHandler}
        defaultNumber={defaultNumber}
        defaultNumberHandler={defaultNumberHandler}
      />
      <StyledSection>
        <DropdownContain
          addsku={setSku}
          setNumOfOrders={setNumOfOrders}
          defaultNumber={defaultNumber}
        />
        <AddToCart sku={sku} num={numOfOrders} />
      </StyledSection>
    </StyledDiv>
  );
}
ProductDisplay.propTypes = {
  defaultHandler: PropTypes.func.isRequired,
  defaultNumberHandler: PropTypes.func.isRequired,
  defaultNumber: PropTypes.number.isRequired,
  product: PropTypes.number.isRequired,
};
