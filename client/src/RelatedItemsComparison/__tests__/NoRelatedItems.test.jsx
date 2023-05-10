/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import {
  render, within, waitFor, screen,
} from '@testing-library/react';
import axios from 'axios';
import RelatedItems from '../components/RelatedItems/RelatedItems';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
    .mockReturnValue(40353),
}));

jest.mock('axios');
const mockData = [];

afterEach(() => {
  jest.clearAllMocks();
});

export default () => {
  describe('Related Items List Mocks', () => {
    it('should render a default card if there are no related products to show', async () => {
      axios.get.mockResolvedValueOnce({ data: mockData });
      render(<RelatedItems />);
      await waitFor(() => expect(axios.get).toHaveBeenCalled());
      const { getByText } = within(screen.getByTestId('default-card'));
      expect(getByText('No Related Items...')).toBeInTheDocument();
    });
  });
};
