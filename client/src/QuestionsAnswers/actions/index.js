import axios from 'axios';

// The thunk for question-data.
export const fetchInitialQuestions = (productId) => (dispatch) => {
  if (productId !== undefined) {
    dispatch({ type: '@questions/FETCH_DATA' });
    axios.get('/qa/questions/', { params: { product_id: productId, page: 1, count: 6 } })
      .then(({ data }) => {
        console.log('ADD INITIAL', data.results);
        dispatch({ type: '@questions/SET_DATA', payload: data.results });
      })
      .catch(({ message }) => dispatch({ type: '@questions/FETCH_FAILED', payload: message }));
  }
};

export const fetchMoreQuestions = (() => {
  let currentPage = 2;
  return (productId) => (dispatch) => {
    if (productId !== undefined) {
      dispatch({ type: '@questions/FETCH_DATA' });
      axios.get('/qa/questions/', { params: { product_id: productId, page: currentPage, count: 6 } })
        .then(({ data }) => {
          console.log('ADD MORE', currentPage, data.results);
          dispatch({ type: '@questions/ADD_QUESTIONS', payload: data.results });
          currentPage += 1;
        })
        .catch(({ message }) => dispatch({ type: '@questions/FETCH_FAILED', payload: message }));
    }
  };
})();

export const example = () => () => {};
