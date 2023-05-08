import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Overview from './Overview';
import QuestionsAnswers from './QuestionsAnswers';
import RelatedItemsComparisons from './RelatedItemsComparison';
import RatingsReviews from './RatingsReviews';

import { GlobalStyle, Theme } from './globalStyles';

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);

  console.log(data);

  useEffect(() => {
    dispatch({ type: '@product/FETCH_DATA' });
    axios.get('/products/40353')
      .then((result) => {
        dispatch({ type: '@product/SET_DATA', payload: result.data });
      })
      .catch((error) => {
        dispatch({ type: '@product/FETCH_FAILED', payload: error.message });
      });
  }, [dispatch]);

  return (
    <div>
      <Theme>
        <GlobalStyle />
        <Overview />
        <RelatedItemsComparisons />
        <QuestionsAnswers />
        <RatingsReviews />
      </Theme>
    </div>
  );
}
