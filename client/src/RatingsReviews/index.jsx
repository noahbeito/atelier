import React from 'react';
import ReviewList from './components/ReviewsList/ReviewList';
import RatingBreakdown from './components/RatingBreakdown/RatingBreakdown';

export default function RatingsReviews() {
  return (
    <div>
      <div>
        <h2> --- Rating Breakdown --- </h2>
        <div> --- Recommendations --- </div>
        <div> --- Rating Summary --- </div>
        <div> --- Breakdown --- </div>
      </div>
      <div>
        <h2> --- Product Breakdon --- </h2>
        <RatingBreakdown />
      </div>
      <div>
        <h2> --- Keyword Search --- </h2>
      </div>
      <div>
        <h2> --- Reviews List --- </h2>
        <div> --- Sort Options --- </div>
        <div>
          {' '}
          <ReviewList />
          {' '}
        </div>
      </div>
      <div>
        <h2> --- Write New Review --- </h2>
      </div>
    </div>
  );
}
