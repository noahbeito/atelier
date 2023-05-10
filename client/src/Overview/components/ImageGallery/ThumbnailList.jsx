import React, { useState, useEffect } from 'react';
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
  const [renderList1, setRenderList1] = useState([]);
  const [leftOverList, setLeftOverList] = useState([]);
  const isLoading = useSelector((state) => state.product.isLoading
                                        || state.overview.productStyles.loading);

  const styles = useSelector((state) => {
    console.log(state);
    return (state.overview.productStyles.styles.results)
      ? state.overview.productStyles.styles.results : [];
  });
  // console.log('This is styles in Thumbnail: ', styles);
  const getPhotoList = (style) => {
    if (style.length === 0) {
      return [];
    }
    const defaultStyles = styles.filter((element) => element['default?']);
    return defaultStyles[0].photos;
  };
  const photoList = getPhotoList(styles);
  useEffect(() => {
    if (photoList.length <= 7) {
      setRenderList1(photoList);
    } else {
      const toRender = photoList.slice(0, 7);
      const leftOver = photoList.slice(7);
      console.log('This is renderList1: ', toRender);
      console.log('This is leftOverList: ', leftOver);
      setRenderList1(toRender);
      setLeftOverList(leftOver);
    }
    // setRenderList(photoList);
  }, [photoList]);
  console.log('PhotoList', photoList);
  // console.log('Default style: ', defaultStyles[0].photos);
  // const photoList = defaultStyles[0].photos;
  const rotateUp = () => {
    const main = [...renderList1];
    const leftOvr = [...leftOverList];
    const toAddToRender = leftOvr.shift();
    const toAddToLeftOver = main.pop();
    main.unshift(toAddToRender);
    leftOvr.push(toAddToLeftOver);
    setRenderList1(main);
    setLeftOverList(leftOvr);
  };
  const rotateDown = () => {
    const main = [...renderList1];
    const leftOvr = [...leftOverList];
    const toAddToRender = leftOvr.pop();
    const toAddToLeftOver = main.shift();
    main.push(toAddToRender);
    leftOvr.unshift(toAddToLeftOver);
    setRenderList1(main);
    setLeftOverList(leftOvr);
  };
  return (
    <StyledDiv>
      <Icons.ChevronUp onClick={rotateUp} />
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            {renderList1.map((img) => (
              <ImageThumbnail
                url={img.url}
                imgUrl={img.thumbnail_url}
                key={img.url}
              />
            ))}
          </>
        )}
      <Icons.ChevronDown onClick={rotateDown} />
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
