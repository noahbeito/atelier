import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '../Icons';

const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

const StyledUpload = styled.div`
  display: block;
  margin: 10px;
`;

const StyledImage = styled.span`
  position: relative;
  display: inline-block;
  & img {
    max-height: 100px;
    max-width: 100px;
    border: 1px solid ${(props) => props.theme.textColor};
  }
  & .image-exit {
    position: absolute;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    top: 5px;
    right: 5px;
    color: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.textColor};
    border-radius: 50%;
    &:hover {
      background-color: ${(props) => props.theme.background};
    }
  }
`;

function UploadThumbnail({ src, onDelete }) {
  return (
    <StyledImage>
      <img src={src} alt="" />
      <Icons.X onClick={onDelete} className="image-exit" />
    </StyledImage>
  );
}

export default function ImageUpload({ images, onDelete, ...props }) {
  return (
    <>
      <StyledUpload>
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          {...props}
        />
      </StyledUpload>
      <FlexWrap>
        {
          images.map((image, i) => (
            <UploadThumbnail
              src={image}
              onDelete={(e) => onDelete(e, i)}
            />
          ))
        }
      </FlexWrap>
    </>
  );
}

UploadThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ImageUpload.propTypes = {
  images: PropTypes.arrayOf(File),
  onDelete: PropTypes.func.isRequired,
};

ImageUpload.defaultProps = {
  images: [],
};
