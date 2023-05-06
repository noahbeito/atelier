/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icons from '../Icons';

export default () => {
  describe('Icon Components Mapping', () => {
    Object.entries(Icons.__map__).forEach(([key, value]) => {
      it(`should render \`${key}\` as font-awesome icon \`${value.iconName}\``, () => {
        const Icon = Icons[key];
        const { getByTitle } = render(<Icon />);
        const faIcon = getByTitle(value.iconName);
        expect(faIcon).toBeInTheDocument();
      });
    });
  });
};
