import React from 'react';
import AddItemToOutfit from './AddItemToOutfit';

export default function YourOutfit() {
  return (
    <div className="your-outfit-container">
      <AddItemToOutfit />
      <ul>
        <li>this list is empty by default</li>
        <li>user can add items to list</li>
      </ul>
    </div>
  );
}
