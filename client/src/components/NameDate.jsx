import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSeller = styled.strong`
  color: ${(props) => props.theme.secondaryColor};
`;

export default function NameDate({
  username,
  date,
  isVerified,
  includeBy,
}) {
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
      {username === 'Seller' ? <StyledSeller>Seller</StyledSeller> : username}
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
  includeBy: PropTypes.bool,
};

NameDate.defaultProps = {
  isVerified: false,
  includeBy: false,
};
