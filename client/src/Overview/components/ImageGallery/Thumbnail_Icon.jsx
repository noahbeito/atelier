import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
background-color: #eee;
width: 10px;
height: 30px;
display: block;
border: 10px solid black;
margin: 10px 10px 10px 10px;
cursor: pointer;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
transition: 0.2s;
&:hover {
  transform: scale(1.05);
}
&.selected {
  border: 20px solid black;
  width: 20px;
  height: 35px;
  box-shadow: lime 0px 5px 15px;
}
`;

export default function Thumbnail(
  {
    imgUrl, url, classname, changeSelected, num,
  },
) {
  return (
    <StyledImg
      data-testid="VerticalThumbnails"
      id={num}
      onClick={changeSelected}
      className={classname}
      src={imgUrl}
      url={url}
    />
  );
}

Thumbnail.propTypes = {
  num: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
};
