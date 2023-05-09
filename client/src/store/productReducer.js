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

export default productReducer;
