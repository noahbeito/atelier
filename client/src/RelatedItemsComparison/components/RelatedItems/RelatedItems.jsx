import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function RelatedItems() {
  return (
    <div className="related-items-container">
      <h3>Related Items</h3>
      <ul>
        <ProductCard />
        <li>use map to</li>
        <li>render cards</li>
      </ul>
    </div>
  );
}
