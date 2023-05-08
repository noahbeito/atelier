import { combineReducers } from 'redux';

import overviewReducer from '../Overview/reducers';
import questionsAnswersReducer from '../QuestionsAnswers/reducers';
// import ratingsReviewsReducer from '../RatingsReviews/reducers';
import relatedItemsReducer from '../RelatedItemsComparison/reducers';

const productReducer = (state = { data: [], loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@product/FETCH_DATA':
      return { ...state, loading: true };
    case '@product/SET_DATA':
      return { ...state, loading: false, data: action.payload };
    case '@product/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  product: productReducer,
  overview: overviewReducer,
  questionsAnswers: questionsAnswersReducer,
  // ratingsReviews: ratingsReviewsReducer,
  relatedItems: relatedItemsReducer,
});

export default rootReducer;
