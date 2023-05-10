import { combineReducers } from 'redux';
// const overviewReducer = (state = {}) => state;

const stylesReducer = (state = { styles: {}, loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@styles/FETCH_DATA':
      return { ...state, loading: true };
    case '@styles/SET_DATA':
      // console.log('action recieved');
      return { ...state, loading: false, styles: action.payload };
    case '@styles/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const defaultReducer = (state = { styleTypes: {}, loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@styleTypes/FETCH_DATA':
      return { ...state, loading: true };
    case '@styleTypes/SET_DATA':
      // console.log('action recieved');
      return { ...state, loading: false, styles: action.payload };
    case '@styleTypes/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const overviewReducer = combineReducers({
  productStyles: stylesReducer,
  defaultStyle: defaultReducer,
});
export default overviewReducer;
