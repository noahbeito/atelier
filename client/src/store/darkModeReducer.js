const darkModeReducer = (state = false, action = {}) => {
  switch (action.type) {
    case '@darkmode/TOGGLE':
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;
