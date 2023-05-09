import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import { FlexWrap } from '../styles';

export default function PhotoList({ photos }) {
  return (
    <FlexWrap>
      {photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
    </FlexWrap>
  );
}
PhotoList.propTypes = {
  photos: PropTypes.arrayOf(Photo.propTypes.photo).isRequired,
};
