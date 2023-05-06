import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  background-color: #eee;
  width: 120px;
  height: 100px;
  display: block;
  border: 1px solid black;
  margin: 15px 20px 15px 0;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.05);
  }
`;

export default function Answer({ ...props }) {
  return (
    <StyledImage src="" alt="alt text" {...props} />
  );
}
