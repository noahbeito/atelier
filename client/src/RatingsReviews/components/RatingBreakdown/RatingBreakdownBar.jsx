import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

const StyledRatingBreakdownBar = styled.div`
  padding-bottom: 5%;
`;

export default function RatingBreakdownBar({
  RatingBreakdown,
}) {
  const ratingBreakdownKeys = Object.keys(RatingBreakdown);
  const ratingBreakdownMap = () => ratingBreakdownKeys.map((key) => (
    <RatingBar
      key={key}
      rating={key}
      value={RatingBreakdown[key]}
    />
  ));

  return (
    <StyledRatingBreakdownBar className="RatingBreakdownBar">
      {ratingBreakdownMap()}
    </StyledRatingBreakdownBar>
  );
}

RatingBreakdownBar.propTypes = {
  RatingBreakdown: PropTypes.shape({
    1: PropTypes.number.isRequired,
    2: PropTypes.number.isRequired,
    3: PropTypes.number.isRequired,
    4: PropTypes.number.isRequired,
    5: PropTypes.number.isRequired,
  }).isRequired,
};
