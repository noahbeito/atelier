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
    case '@styles/CHANGE_DEFAULT': {
      // console.log(action);
      const temp = { ...state };
      // console.log('This is temp: ', temp);
      // const defaultVal = 'default?';
      temp.styles.results.forEach((element, i) => {
        // console.log('This is style in temp', element);
        // console.log('This is sub [i]: ', temp.styles.results[i]['default?']);
        if (element.style_id === action.style) {
          temp.styles.results[i]['default?'] = true;
        }
        if (element.style_id !== action.style) {
          temp.styles.results[i]['default?'] = false;
        }
      });
      console.log('This is temp: ', temp);
      return { ...state, styles: temp };
      // return { ...state };
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
      // console.log('action recieved');
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
      // console.log('action recieved');
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
