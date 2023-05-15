import React from 'react';
import axios from 'axios';
import {
  render, screen, waitFor, within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RelatedItems from '../components/RelatedItems/RelatedItems';

// Mock useSelector
// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(),
//   useSelector: jest.fn()
//     .mockReturnValue(41009),
// }));
// jest.mock('../components/ProductCard/ProductCard');
// const dispatchMock = jest.fn();
// useDispatch.mockReturnValue(dispatchMock);

// Mock axios
jest.mock('axios');

axios.get.mockImplementation((url) => {
  switch (url) {
    case '/products/40353/related':
      return Promise.resolve({
        data: [
          40500,
          40996,
          40617,
          40718,
          41039,
          40757,
        ],
      });
    case '/products/40353':
      return Promise.resolve({
        data: [
          {
            id: 40353,
            campus: 'hr-rfp',
            name: 'Infinity Stone',
            slogan: 'Reality is often disappointing. That is, it was. Now, reality can be whatever I want.',
            description: 'The Infinity Stones are six immensely powerful stone-like objects...',
            category: 'Accessories',
            default_price: '50000000.00',
            created_at: '2021-08-13T14:38:44.509Z',
            updated_at: '2021-08-13T14:38:44.509Z',
            features: [],
          },
        ],
      });
    case '/products/40353/styles':
      return Promise.resolve({
        data: [
          {
            product_id: '40353',
            results: [
              {
                style_id: 240546,
                name: 'Reality',
                original_price: '500000000.00',
                sale_price: null,
                'default?': true,
                photos: [
                  {
                    thumbnail_url: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609',
                    url: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609',
                  },
                ],
                skus: {
                  null: {
                    quantity: null,
                    size: null,
                  },
                },
              },
            ],
          },
        ],
      });
    default:
      return Promise.resolve({ data: [] });
  }
});
const mockStore = configureStore([]);

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
export default () => {
  describe('Related Items List Tests', () => {
    beforeEach(() => {
      useSelectorMock.mockClear();
      useDispatchMock.mockClear();
    });

    it('should render related product cards upon render of RelatedItems component', async () => {
      const store = mockStore({});

      render(
        <Provider store={store}>
          <RelatedItems />
        </Provider>,
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalled());
      const { container } = within(screen.getByTestId('related-carousel'));
      console.log('CARDS: ', container);
    });

    // test('should update related items list when a product card is clicked', async () => {
    //   await screen.findByRole('no-image');
    //   fireEvent.click(screen.getByAltText('no-image'));
    //   await screen.findByAltText('no-image');
    //   expect(screen.get);
    // });
  });
};
