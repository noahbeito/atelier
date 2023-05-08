import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
  width: 100%;
  height: 20%;
  display: flex;
  border: solid 2px black;
`;
export default function ProductInfo() {
  return (
    <StyledAside>
      <section>
        {/* This should condionally render the desciption for the current item.
          If description is not there. The should be a "No current description
          available at this time". Also possible conditional rendering with the
          length of the text. With a show more/show less button if theres time. */}
        {/* This is where the random bit of text description from the Business Requirements
         will go */}
        <p>This is Americas finest tool set. Super sharp drill bits, long lasting batteries!</p>
        {/* <p> {product.text} </p> */}
      </section>
      <section>
        {/* This will be where the social media links go FB, TWITTER PINTRIST */}
      </section>
    </StyledAside>
  );
}
