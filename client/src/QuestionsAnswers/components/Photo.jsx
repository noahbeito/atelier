import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../../components/Thumbnail';

export default function Photo({ photo, ...props }) {
  return (
    <Thumbnail src={photo || ''} alt="alt text" {...props} />
  );
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
};
