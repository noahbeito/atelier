import React from 'react';
import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';

import { Provider, useSelector } from 'react-redux';

import configureStore from 'redux-mock-store';

import YourOutfit from '../components/YourOutfit/YourOutfit';
// import ProductCard from '../components/ProductCard/ProductCard';

// jest.mock('../components/ProductCard/ProductCard', () => (
//   <data-testid="product-card" />
// ));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

export default () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    jest.clearAllMocks();

    store = mockStore();
  });

  it('should add current product to your outfit when AddToOutfit card is clicked', async () => {
    render(
      <Provider store={store}>
        <YourOutfit chevronClickHandler={() => {}} />
      </Provider>,
    );
    const cards = screen.getAllByTestId('product-card') || [];
    const addCard = screen.getByTestId('add-card');
    fireEvent.click(addCard);
    const testCards = screen.getAllByTestId('product-card');
    expect(testCards.length).toBe(cards.length + 1);
  });
};
