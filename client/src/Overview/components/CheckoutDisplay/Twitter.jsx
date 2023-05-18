import React from 'react';

export default function Twitter() {
  return (
    <a
      data-testid="Twitter"
      className="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Hello%20world"
    >
      Tweet
    </a>
  );
}
