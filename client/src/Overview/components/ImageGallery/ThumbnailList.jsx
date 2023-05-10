import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import ImageThumbnail from './ImageThumbnail';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width: 110px;
  height: 700px;
  display: flex;
  flex-direction: column;
  border: solid 2px lightgrey;
  margin 2px;
  border-radius: 5px;
  /* margin:2px;
  padding:5px; */
`;
const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: gray;
`;
export default function ThumbnailList() {
  const isLoading = useSelector((state) => state.product.isLoading
                                        || state.overview.productStyles.loading);

  const styles = useSelector((state) => {
    console.log(state);
    return (state.overview.productStyles.styles.results)
      ? state.overview.productStyles.styles.results : [];
  });
  console.log('This is styles in Thumbnail: ', styles);
  const getPhotoList = (style) => {
    if (style.length === 0) {
      return [];
    }
    const defaultStyles = styles.filter((element) => element['default?']);
    return defaultStyles[0].photos;
  };
  const photoList = getPhotoList(styles);
  console.log('PhotoList', photoList);
  // console.log('Default style: ', defaultStyles[0].photos);
  // const photoList = defaultStyles[0].photos;
  return (
    <StyledDiv>
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            {photoList.map((img) => (
              <ImageThumbnail
                url={img.url}
                imgUrl={img.thumbnail_url}
                key={img}
              />
            ),
            )}
          </>
        )}
      <Icons.ChevronDown />
    </StyledDiv>
  );
}

// ThumbnailList.propTypes = {
//   products: PropTypes.node,
// };

// ThumbnailList.defaultProps = {
//   products: [],
// };

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
