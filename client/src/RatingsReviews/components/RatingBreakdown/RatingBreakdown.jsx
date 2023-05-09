import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import testMetaData from '../../testData/metaData.json';
import StarRating from '../../../components/StarRating';
import RatingBreakdownBar from './RatingBreakdownBar';
import CharBreakdownBar from './CharBreakdownBar';

const StyledRatingsOverview = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledRating = styled.div`
  font-size: 500%;
  font-weight: 300%;
  padding-right: 2%;
`;

const StyledStarRating = styled(StarRating)`
`;

const StyledRecomended = styled.div`
`;

const StyledCharBreakdownBar = styled(CharBreakdownBar)`
`;

export default function RatingBreakdown({
  ...props
}) {
  // TODO: update testData variable to legit data for implementation

  // Calculate the average rating to the nearest decimal
  const { ratings } = testMetaData;
  const ratingAvg = () => {
    const result = {};
    const ratingValues = Object.keys(ratings);
    let total = 0;
    let totalNumOfRatings = 0;
    for (let i = 0; i < ratingValues.length; i += 1) {
      const ratingValue = ratingValues[i];
      total += (Number(ratingValue) * Number(ratings[ratingValue]));
      totalNumOfRatings += Number(ratings[ratingValue]);
    }

    result.avgRating = Number((total / totalNumOfRatings).toFixed(1));

    const ratingBreakdown = {};
    for (let i = 0; i < ratingValues.length; i += 1) {
      const ratingValue = ratingValues[i];
      ratingBreakdown[ratingValue] = Number((ratings[ratingValue] / totalNumOfRatings).toFixed(2));
    }

    result.ratingBreakdown = ratingBreakdown;

    return result;
  };

  const breakdown = ratingAvg();

  // Calculate the average rating to the nearest decimal
  const { recommended } = testMetaData;
  const recommendPercent = () => {
    const total = Number(recommended.true) + Number(recommended.false);
    const result = Number((recommended.true / total).toFixed(2));
    return result;
  };

  // Breakout Characteristic data from MetaData
  const { characteristics } = testMetaData;

  return (
    <div className="RatingBreakdown" {...props}>
      <StyledRatingsOverview className="RatingsOverview">
        <StyledRating>
          {breakdown.avgRating}
        </StyledRating>
        <StyledStarRating rating={breakdown.avgRating} />
      </StyledRatingsOverview>

      <StyledRecomended className="Recommended">
        {`${recommendPercent() * 100}% of reviews recommended this product`}
      </StyledRecomended>

      <RatingBreakdownBar
        RatingBreakdown={breakdown.ratingBreakdown}
      />

      <StyledCharBreakdownBar className="CharBreakdownBar" CharBreakdown={characteristics} />
    </div>
  );
}

RatingBreakdown.propTypes = {
  props: PropTypes.node,
};

RatingBreakdown.defaultProps = {
  props: null,
};
