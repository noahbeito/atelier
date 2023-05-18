import { combineReducers } from 'redux';

import productReducer from './productReducer';
import darkModeReducer from './darkModeReducer';
import overviewReducer from '../Overview/reducers';
import questionsAnswersReducer from '../QuestionsAnswers/reducers';
import ratingsReviewsReducer from '../RatingsReviews/reducers';
import relatedItemsReducer from '../RelatedItemsComparison/reducers';

const rootReducer = combineReducers({
  product: productReducer,
  overview: overviewReducer,
  questionsAnswers: questionsAnswersReducer,
  ratingsReviews: ratingsReviewsReducer,
  relatedItems: relatedItemsReducer,
  darkMode: darkModeReducer,
});

export default rootReducer;
