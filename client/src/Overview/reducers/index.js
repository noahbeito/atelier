import { combineReducers } from 'redux';
// const overviewReducer = (state = {}) => state;

const stylesReducer = (state = { styles: {}, loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@styles/FETCH_DATA':
      return { ...state, loading: true };
    case '@styles/SET_DATA':
      return { ...state, loading: false, styles: action.payload };
    case '@styles/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    case '@styles/CHANGE_DEFAULT': {
      const temp = { ...state };
      temp.styles.results.forEach((element, i) => {
        if (element.style_id === action.style) {
          temp.styles.results[i]['default?'] = true;
        }
        if (element.style_id !== action.style) {
          temp.styles.results[i]['default?'] = false;
        }
      });
      return {
        ...state,
        styles: {
          product_id: state.styles.product_id,
          results: {
            ...state.styles.results,
            ...temp,
          },
        },
      };
    }
    default:
      return state;
  }
};

const selectDataReducer = (state = { selected: {}, loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@styleTypes/FETCH_DATA':
      return { ...state, loading: true };
    case '@styleTypes/SET_DATA':
      return { ...state, loading: false, styles: action.payload };
    case '@styleTypes/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const selectImgReducer = (state = { img: {}, loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@image/FETCH_DATA':
      return { ...state, loading: true };
    case '@image/SET_DATA':
      return { ...state, loading: false, styles: action.payload };
    case '@image/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const overviewReducer = combineReducers({
  productStyles: stylesReducer,
  selectDataStyle: selectDataReducer,
  selectImg: selectImgReducer,
});
export default overviewReducer;
