import React from 'react';
import Icons from '../../components/Icons';

export default function Search() {
  return (
    <div>
      <input
        placeholder="Have a question? Search for answers..."
      />
      <Icons.Search size="lg" />
    </div>
  );
}
