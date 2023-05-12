import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ImageThumbnail from './ImageThumbnail';
import Icons from '../../../components/Icons';

const StyledDiv = styled.div`
  width: 110px;
  /* height: 700px; */
  display: flex;
  flex-direction: column;
  border: solid 3px lightgrey;
  margin 4px;
  border-radius: 5px;
  box-shadow: white 0px 5px 15px;
  background: rgba(122, 111, 107, 0.512);
  /* opacity:1; */
  /* margin:2px;
  padding:5px; */
`;
const StyledButtonReplacement = styled.div`
  width: 100%;
  height: 20px;
  opacity:1;
`;
const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: gray;
  box-shadow: gray 0px 5px 15px;
`;
export default function ThumbnailList({ bgHandler, defaultNumber }) {
  // let list = [];
  const [renderList1, setRenderList1] = useState([]);
  const [leftOverList, setLeftOverList] = useState([]);
  // const [styleArray, setStyleArray] = useState([]);
  const isLoading = useSelector((state) => state.product.isLoading
                                        || state.overview.productStyles.loading);

  const styles = useSelector((state) => {
    if (state.overview.productStyles.styles.results) {
      // list = state.overview.productStyles.styles.results;
      return state.overview.productStyles.styles.results;
    }
    return [];
  });
  // console.log('This is styles in Thumbnail: ', styles);
  const getPhotoList = (style) => {
    if (style.length === 0) {
      return [];
    }
    // console.log('****  STYLESARRAY ****: 1', style);
    const defaultStyles = style.filter((element) => element.style_id === defaultNumber);
    return defaultStyles[0].photos;
  };
  const photoList = getPhotoList(styles);
  // console.log('This is photolist in thumbnailist:2', photoList);
  const newList = photoList.slice();
  useEffect(() => {
    // setStyleArray(list);
    newList.map((obj, i) => {
      if (i === 0) {
        newList[i].class = 'selected';
        bgHandler(newList[0]);
      } else {
        newList[i].class = 'unselected';
      }
      return obj;
    });
    if (newList.length <= 7) {
      setRenderList1(newList);
    } else {
      const toRender = newList.slice(0, 7);
      const leftOver = newList.slice(7);
      setRenderList1(toRender);
      setLeftOverList(leftOver);
    }
  }, [isLoading, defaultNumber]);

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
  const changeSelected = (event) => {
    const num = Number(event.target.id);
    const change = [...renderList1];
    change.map((obj, i) => {
      if (i === num) {
        bgHandler(change[i]);
        change[i].class = 'selected';
      } else {
        change[i].class = 'unselected';
      }
      return obj;
    });
    setRenderList1(change);
  };
  // console.log('This is newlist testing:', newList);
  return (
    <StyledDiv>
      { newList.length > 7
        ? <Icons.ChevronUp onClick={rotateUp} />
        : <StyledButtonReplacement />}
      {/* <Icons.ChevronUp onClick={rotateUp} /> */}
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            {renderList1.map((img, idx) => (
              <ImageThumbnail
                url={img.url}
                imgUrl={img.thumbnail_url}
                key={img.url}
                num={idx}
                classname={img.class}
                changeSelected={changeSelected}
              />
            ))}
          </>
        )}
      { newList.length > 7
        ? <Icons.ChevronDown onClick={rotateDown} />
        : <StyledButtonReplacement />}
    </StyledDiv>
  );
}

ThumbnailList.propTypes = {
  bgHandler: PropTypes.func.isRequired,
  defaultNumber: PropTypes.number.isRequired,
};

// ThumbnailList.defaultProps = {
//   bgHandler: PropTypes.func.isRequired,
// };
