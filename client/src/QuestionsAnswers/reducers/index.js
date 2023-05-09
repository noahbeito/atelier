import { combineReducers } from 'redux';

const qaReducer = (state = { questions: {}, loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@questions/FETCH_DATA':
      return { ...state, loading: true };
    case '@questions/SET_DATA':
      return { ...state, loading: false, questions: action.payload };
    case '@questions/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const questionsAnswersReducer = combineReducers({
  main: qaReducer,
});

export default questionsAnswersReducer;
