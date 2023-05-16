import axios from 'axios';

// The thunk for question-data.
export const fetchInitialQuestions = (productId) => (dispatch) => {
  if (productId !== undefined) {
    dispatch({ type: '@questions/FETCH_DATA' });
    return axios.get('/qa/questions/', { params: { product_id: productId, page: 1, count: 6 } })
      .then(({ data }) => {
        dispatch({ type: '@questions/SET_DATA', payload: data.results });
      })
      .catch(({ message }) => dispatch({ type: '@questions/FETCH_FAILED', payload: message }));
  }
  return new Promise((resolve, reject) => {
    reject(new Error('This id does not exist!'));
  });
};

// A thunk with a closure to keep track of the current page
export const fetchMoreQuestions = (() => {
  let currentPage = 2;
  return (productId) => (dispatch) => {
    if (productId !== undefined) {
      dispatch({ type: '@questions/FETCH_DATA' });
      return axios.get('/qa/questions/', { params: { product_id: productId, page: currentPage, count: 6 } })
        .then(({ data }) => {
          dispatch({ type: '@questions/ADD_QUESTIONS', payload: data.results });
          currentPage += 1;
          return data;
        })
        .catch(({ message }) => dispatch({ type: '@questions/FETCH_FAILED', payload: message }));
    }
    return new Promise((resolve, reject) => {
      reject(new Error('This id does not exist!'));
    });
  };
})();

export const postQuestion = (productId, question) => (dispatch) => {
  if (productId !== undefined) {
    dispatch({ type: '@questions/FETCH_DATA' });
    return axios.post('/qa/questions', { ...question, product_id: productId })
      .then(() => {
        dispatch({ type: '@questions/ADD_QUESTIONS', payload: [question] });
      })
      .then(() => {
        dispatch(fetchInitialQuestions(productId));
      })
      .catch(({ message }) => dispatch({ type: '@questions/FETCH_FAILED', payload: message }));
  }
  return new Promise((resolve, reject) => {
    reject(new Error('This id does not exist!'));
  });
};

export const postAnswer = (productId, questionId, answer) => (dispatch) => {
  if (questionId !== undefined) {
    dispatch({ type: '@questions/FETCH_DATA' });
    return axios.post(`/qa/questions/${questionId}/answers`, answer)
      .then(() => {
        dispatch({ type: '@answers/ADD_ANSWER', payload: answer });
      })
      .then(() => {
        dispatch(fetchInitialQuestions(productId));
      })
      .catch(({ message }) => dispatch({ type: '@questions/FETCH_FAILED', payload: message }));
  }
  return null;
};

// Template thunk
export const example = () => () => {};
