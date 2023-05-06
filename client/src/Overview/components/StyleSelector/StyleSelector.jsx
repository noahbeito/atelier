import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';

export default function StyleSelector() {
  return (
    <div>
      <p>STYLE-SELECTED STYLE</p>
      <Thumbnail />
      {/* HERE I AM GOING TO IMPORT MY THUMBNAIL COMPONENT AND I WILL MAP OVER
      THE ARRAY OF STYLES AND APPLY THE DETAILS OF EACH STYLE TO THE THUMBNAIL */}
    </div>
  );
}
