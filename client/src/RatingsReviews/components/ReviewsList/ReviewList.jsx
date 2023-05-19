import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ReviewTile from './ReviewTile';

export default function ReviewList({
  className,
}) {
  const reviews = useSelector((state) => state.ratingsReviews.reviews.results);
  const filter = useSelector((state) => state.ratingsReviews.filter);
  const sort = useSelector((state) => state.ratingsReviews.sort);
  const length = useSelector((state) => state.ratingsReviews.reviewViewLength);
  const dispatch = useDispatch();

  const [reviewListView, setReviewListView] = useState(reviews);

  const filterReviews = () => {
    const results = [];
    reviews.forEach((review) => {
      const roundedRating = Math.round(review.rating);
      if (
        sort[roundedRating] || review.body.toLowerCase().includes(sort.keyword)
        || review.summary.toLowerCase().includes(sort.keyword)
        || review.reviewer_name.toLowerCase().includes(sort.keyword)
      ) {
        results.push(review);
      }
    });

    if (results.length < length) {
      dispatch({ type: '@reviews/SET_SHOW_MORE_REVIEWS', payload: false });
    }
    return results;
  };

  useEffect(() => {
    if (filter) {
      setReviewListView(filterReviews().slice(0, length));
    } else {
      setReviewListView(reviews.slice(0, length));
    }
  }, [filter, sort, reviews, length]);

  const reviewTileMap = reviewListView.map((review) => (
    <ReviewTile
      key={review.review_id}
      id={review.review_id}
      rating={review.rating}
      summary={review.summary}
      recommend={review.recommend}
      response={review.response}
      body={review.body}
      date={review.date}
      reviewerName={review.reviewer_name}
      helpfulness={review.helpfulness}
      photos={review.photos}
    />
  ));

  return (
    <div className={className}>
      { reviewTileMap }
    </div>
  );
}

ReviewList.propTypes = {
  className: PropTypes.string,
};

ReviewList.defaultProps = {
  className: '',
};
