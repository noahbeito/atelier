/* eslint-env jest */

import sortHelpfulness from '../sortHelpfulness';

export default () => {
  describe('The Sort Helpfuness Method', () => {
    it('should sort by helpfulness in reverse order when objects are not sellers', () => {
      const input = [{ helpfulness: 0, a: 'a' }, { helpfulness: 5, a: 'a' }, { helpfulness: 1, a: 'b' }, { helpfulness: 2, a: 'c' }];
      expect(sortHelpfulness(input, 'a')).toEqual([
        { helpfulness: 5, a: 'a' },
        { helpfulness: 2, a: 'c' },
        { helpfulness: 1, a: 'b' },
        { helpfulness: 0, a: 'a' },
      ]);
    });

    it('should place priority to a seller if there is one', () => {
      const input = [{ helpfulness: 0, a: 'Seller' }, { helpfulness: 5, a: 'a' }, { helpfulness: 1, a: 'b' }, { helpfulness: 2, a: 'c' }];
      expect(sortHelpfulness(input, 'a')).toEqual([
        { helpfulness: 0, a: 'Seller' },
        { helpfulness: 5, a: 'a' },
        { helpfulness: 2, a: 'c' },
        { helpfulness: 1, a: 'b' },
      ]);
    });

    it('should place priority to multiple sellers', () => {
      const input = [{ helpfulness: 0, a: 'Seller' }, { helpfulness: 5, a: 'a' }, { helpfulness: 1, a: 'b' }, { helpfulness: 2, a: 'Seller' }];
      expect(sortHelpfulness(input, 'a')).toEqual([
        { helpfulness: 2, a: 'Seller' },
        { helpfulness: 0, a: 'Seller' },
        { helpfulness: 5, a: 'a' },
        { helpfulness: 1, a: 'b' },
      ]);
    });
  });
};
