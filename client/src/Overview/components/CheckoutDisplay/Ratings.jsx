import React from 'react';
import { useSelector } from 'react-redux';
import StarRating from '../../../components/StarRating';

export default function Rating() {
  const ratingsData = useSelector((state) => state.ratingsReviews.meta.ratings);
  const calculateAvgRating = (ratings) => {
    const totalRatings = Object.values(ratings)
      .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const avg = ((ratings['1'] * 1) + (ratings['2'] * 2) + (ratings['3'] * 3) + (ratings['4'] * 4) + (ratings['5'] * 5)) / totalRatings;
    return avg;
  };
  const data = calculateAvgRating(ratingsData);
  return (
    <StarRating rating={data} />
  );
}
