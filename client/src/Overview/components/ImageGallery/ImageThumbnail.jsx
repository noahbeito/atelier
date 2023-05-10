import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Thumbnail from '../../../components/Thumbnail';

const StyledImg = styled.img`
background-color: #eee;
width: 80px;
height: 70px;
display: block;
border: 1px solid black;
margin: 10px 10px 10px 10px;
cursor: pointer;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
transition: 0.2s;
&:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: scale(1.05);
}
`;

export default function ImageThumbnail({ imgUrl, url }) {
  return (
    <StyledImg src={imgUrl} url={url} />
  );
}

ImageThumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
