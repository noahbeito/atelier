import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import Thumbnail from '../../../components/Thumbnail';

// const StyledThumbnail = styled.img`
//   background-color: #eee;
//   /* display: inline-block;
//   margin: 10px 0 0 2%;
//   flex-grow: 1; */
//   /* height: 100px;
//   width: calc(100% * (1/4) - 10px - 1px); */
//   width: 80px;
//   height: 70px;
//   display: block;
//   border: 1px solid black;
//   margin: 10px 10px 10px 10px;
//   cursor: pointer;
//   border-radius: 5px;
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
//   transition: 0.2s;
//   &:hover {
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     transform: scale(1.05);
//   }
// `;
const StyledThumbnail = styled.div`
background-color: #eee;
/* display: inline-block;
margin: 10px 0 0 2%;
flex-grow: 1; */
/* height: 100px;
width: calc(100% * (1/4) - 10px - 1px); */
width: 75px;
height: 75px;
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid black;
margin: 10px 10px 10px 10px;
cursor: pointer;
border-radius: 50px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
transition: 0.2s;
&:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: scale(1.05);
}
&.true {
  border: green 3px solid;
  transform: scale(1.05);
}
`;

export default function StyleThumbnail({ styletype, id }) {
  const dispatch = useDispatch();
  const changeDefault = () => {
    dispatch({ type: '@styles/CHANGE_DEFAULT', style: id });
  };
  return (
    <StyledThumbnail
      onClick={changeDefault}
      key={id}
      className={styletype['default?']}
    >
      <p>{styletype.name}</p>
    </StyledThumbnail>
  );
}

StyleThumbnail.propTypes = {
  styletype: PropTypes.node,
  id: PropTypes.node,
};

StyleThumbnail.defaultProps = {
  styletype: PropTypes.node,
  id: PropTypes.node,
};
