const sortHelpfulness = (arr, propertyType) => {
  arr.sort((x, y) => {
    const isSellerX = x[propertyType] === 'Seller';
    const isSellerY = y[propertyType] === 'Seller';

    if (isSellerX && !isSellerY) {
      return -1;
    }
    if (!isSellerX && isSellerY) {
      return 1;
    }

    const helpfulX = x.helpfulness;
    const helpfulY = y.helpfulness;
    if (helpfulX > helpfulY) {
      return -1;
    }
    if (helpfulX < helpfulY) {
      return 1;
    }
    return 0;
  });

  return arr;
};

export default sortHelpfulness;
