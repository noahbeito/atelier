import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Thumbnail from '../../components/Thumbnail';
import Popup from '../../components/Popup';

const StyledImg = styled.img`
  min-height: 40%;
  max-width: 100%;
  object-fit: contain;
`;

export default function Photo({ photo, ...props }) {
  // Attaches reference to open and close functions from within modal
  const modalRef = useRef();
  const handleClick = () => modalRef.current.openModal();
  const handleCloseModal = () => modalRef.current.closeModal();

  return (
    <>
      <Popup ref={modalRef} titles={[]}>
        <StyledImg
          src={photo || ''}
          alt="alt text"
          handleCloseModal={handleCloseModal}
        />
      </Popup>
      <Thumbnail onClick={handleClick} data-testid="photo" src={photo || ''} alt="alt text" {...props} />
    </>
  );
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
};
