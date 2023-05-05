import React from 'react';
import PropTypes from 'prop-types';
import Button from './ui/Button';

export default function Helpful({ helpfulness, ...props }) {
  return (
    <>
      <span>Helpful?</span>
      <span>
        <Button variant="small" {...props}>Yes</Button>
        (
        {helpfulness}
        )
      </span>
    </>
  );
}

Helpful.propTypes = {
  helpfulness: PropTypes.number.isRequired,
};
