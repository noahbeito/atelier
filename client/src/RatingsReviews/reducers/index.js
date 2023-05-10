const ratingsReviewsReducer = (
  state = {
    reviews: {
      product: 0,
      page: 0,
      count: 0,
      results: [],
    },
    meta: {
      product_id: '0',
      ratings: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      recommend: {
        false: 0,
        true: 0,
      },
      characteristics: {
        Size: {
          id: 0,
          value: 2.511111,
        },
      },
    },
    loading: true,
    error: null,
  },
  action = {
    type: '',
    payload: {},
  },
) => {
  switch (action.type) {
    case '@reviews/FETCH_DATA':
      return { ...state, loading: true };
    case '@reviews/SET_DATA':
      return { ...state, loading: false, reviews: action.payload };
    case '@reviews/FAILED':
      return { ...state, loading: false, reviews: action.payload };

    case '@reviews/meta/FETCH_DATA':
      return { ...state, loading: true };
    case '@reviews/meta/SET_DATA':
      return { ...state, loading: false, meta: action.payload };
    case '@reviews/meta/FAILED':
      return { ...state, loading: false, meta: action.payload };

    default:
      return state;
  }
};

export default ratingsReviewsReducer;
