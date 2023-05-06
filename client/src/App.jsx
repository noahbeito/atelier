import React from 'react';
import Overview from './Overview';
import QuestionsAnswers from './QuestionsAnswers';
import RelatedItemsComparisons from './RelatedItemsComparison';
import RatingsReviews from './RatingsReviews';

export default function App() {
  return (
    <div>
      <Overview />
      <RelatedItemsComparisons />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  );
}
