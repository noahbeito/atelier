// /* eslint-env jest */
// import React from 'react';
// import '@testing-library/jest-dom';
// import axios from 'axios';
// import { render, screen, waitFor } from '@testing-library/react';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';

// import store from '../../store/index';
// import rootReducer from '../../store/rootReducer';
// import RatingsReviews from '../index';

// import testMetaData from '../testData/metaData.json';
// import testReviewsData from '../testData/reviews.json';
// import { fetchMetadata, fetchReviews } from '../actions/index';

// import initialState from './mockData/initialState';

// jest.mock('axios');

// export default () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('RatingBreakdown component testing', () => {
//     it('should render static components', async () => {
//       const mStore = configureStore({
//         reducer: rootReducer,
//         middleware: [thunkMiddleware],
//         preloadedState: initialState,
//       });
//       // axios.mockResolvedValue({ data: testMetaData });
//       // await mStore.dispatch(fetchMetadata('00000'));
//       // axios.mockResolvedValue({ data: testReviewsData });
//       // await mStore.dispatch(fetchReviews('00000'));

//       // waitFor(() => {
//       //   expect(axios).toHaveBeenCalledTimes(2);
//       // });

//       console.log(mStore.getState());

//       render(
//         <Provider store={mStore}>
//           <RatingsReviews />
//         </Provider>,
//       );

//       [
//         3.5, '1 stars', '2 stars', '3 stars', '4 stars',
//         '5 stars', 'Fit', 'Length', 'Comfort', 'Quality',
//         'helpful', 'relevance', 'newest', 'more reviews',
//         'add a review',
//       ].forEach((element, i) => {
//         console.log(element, i);
//         expect(screen.getByText(element)).toBeInTheDocument();
//       });
//     });
//   });
// };
