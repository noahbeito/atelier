import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyleThumbnail from '../StyleThumbnail/StyleThumbnail';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width: 110px;
  height: 90%;
  display: flex;
  flex-direction: column;
  border: solid 2px lightgrey;
  margin 2px;
  border-radius: 5px;
  /* margin:2px;
  padding:5px; */
`;

export default function ThumbnailList({ products }) {
  return (
    <StyledDiv>
      { products.map((product) => <StyleThumbnail product={product} key={product} />) }
      <Icons.ChevronDown />
    </StyledDiv>
  );
}

ThumbnailList.propTypes = {
  products: PropTypes.node,
};

ThumbnailList.defaultProps = {
  products: [],
};

// import React from 'react';
// // import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import StyleThumbnail from '../StyleThumbnail/StyleThumbnail';

// const StyledThumbnailGrid = styled.div`
//   display: flex;
//   /* justify-content: left; */
//   flex-direction: column;

// `;
// const StyledSurround = styled.div`
//   border: lightgrey 3px solid;
//   border-radius: 5px;
//   padding: 5px;
// `;

// export default function StyleSelector({ products }) {
//   return (
//     <StyledSurround>
//       <h5>Selected Style</h5>
//       <StyledThumbnailGrid>
//         { products.map((product, i) => <StyleThumbnail product={product} key={i} />) }
//       </StyledThumbnailGrid>
//     </StyledSurround>
//   );
// }
