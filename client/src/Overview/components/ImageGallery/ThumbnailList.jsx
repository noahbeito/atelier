import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: column;
  border: solid 2px black;
  /* margin:2px;
  padding:5px; */
`;

export default function ThumbnailList() {
  return (
    <StyledDiv>
      {/* <Thumbnails></Thumbnails> */}
      <p>Test</p>
    </StyledDiv>
  );
}

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
