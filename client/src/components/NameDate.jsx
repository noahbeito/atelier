import React from 'react';
import PropTypes from 'prop-types';

export default function NameDate({
  username,
  date,
  isVerified,
  isSeller,
  includeBy,
}) {
  console.log('date', date);
  const dateString = new Date(date);
  const fdate = dateString.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      {includeBy ? 'by ' : ''}
      {isVerified ? 'V' : ''}
      {username}
      {isSeller && <strong> - Seller</strong>}
      ,
      {' '}
      {fdate}
    </>
  );
}

NameDate.propTypes = {
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  isSeller: PropTypes.bool,
  includeBy: PropTypes.bool,
};

NameDate.defaultProps = {
  isVerified: false,
  isSeller: false,
  includeBy: false,
};
