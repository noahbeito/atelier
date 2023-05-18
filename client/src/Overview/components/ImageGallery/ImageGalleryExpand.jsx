import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThumbnailHorizontal from './ThumbnailHorizontal';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const StyledImageTop = styled.img`
  width: 2500px;
  height: 2500px; */
  overflow: hidden;
  object-position: ${(props) => props.posX}px ${(props) => props.posY}px;
  ;
`;

const StyledButtonContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 35%;
`;
export default function ImageGalleryExpand({
  bg,
  onClickHandler,
  defaultNumber,
  bgHandler,
}) {
  const [posX, setPosX] = useState(-650);
  const [posY, setPosY] = useState(-650);
  const mouse = (e) => {
    const y = e.clientY;
    const x = e.clientX;
    if (x < 300) {
      if (y < 200) {
        if (posX < 0 && posY < 0) {
          setPosX((prev) => prev + 5);
          setPosY((prev) => prev + 5);
        }
        if (posY < 0) {
          setPosY((prev) => prev + 5);
        }
      } else if (y >= 200 && y < 600) {
        if (posX < 0) {
          setPosX((prev) => prev + 5);
        }
      } else if (y >= 600) {
        if (posX < 0 && posY > -1600) {
          setPosX((prev) => prev + 5);
          setPosY((prev) => prev - 5);
        }
        if (posY > -1600) {
          setPosY((prev) => prev - 5);
        }
      }
    }
    if (x >= 300 && x <= 800) {
      if (y < 200) {
        if (posY < 0) {
          setPosY((prev) => prev + 5);
        }
      } else if (y > 600 && y < 700) {
        if (posY > -1670) {
          setPosY((prev) => prev - 5);
        }
      }
    }
    if (x >= 875) {
      if (y < 200) {
        if (posX > -1050 && posY < 0) {
          setPosX((prev) => prev - 5);
          setPosY((prev) => prev + 5);
        }
        if (posY < 0) {
          setPosY((prev) => prev + 5);
        }
      } else if (y > 200 && y < 600) {
        if (posX > -1050) {
          setPosX((prev) => prev - 5);
        }
      } else if (y > 600) {
        if (posX > -1050 && posY > -1600) {
          setPosX((prev) => prev - 5);
          setPosY((prev) => prev - 5);
        }
        if (posY > -1600) {
          setPosY((prev) => prev - 5);
        }
      }
    }
  };
  return (
    <StyledDiv
      data-testid="ExpandedView"
      onMouseMove={(e) => mouse(e)}
      onClick={onClickHandler}
    >
      <StyledImageTop posX={posX} posY={posY} src={bg} />
      <StyledButtonContainer>
        <ThumbnailHorizontal
          defaultNumber={defaultNumber}
          bgHandler={bgHandler}
        />
      </StyledButtonContainer>
    </StyledDiv>
  );
}

ImageGalleryExpand.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  bg: PropTypes.string.isRequired,
  defaultNumber: PropTypes.number.isRequired,
  bgHandler: PropTypes.func.isRequired,
};
