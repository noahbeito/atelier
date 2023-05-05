import React from 'react';
import reviewsTestDate from '../../testData/reviews.json';

// const testData = JSON.parse(reviewsTestDate).results;

export default function ReviewList(testData) {


  const reviewTileMap = () => {
    return <div> Hello, this is Review Tile Map!</div>
  };

  return (
    <div>
      { reviewTileMap() }
    </div>
  )
}