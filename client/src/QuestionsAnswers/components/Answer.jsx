import React from 'react';
import Button from '../../components/Button';

export default function Answer() {
  return (
    <>
      <div>Tootsie Roll Pudding</div>
      <div>
        <div>
          <span>by User1337, May 1, 2019</span>
        </div>
        <div>
          <span>Helpful?</span>
          <Button>Yes</Button>
          <span>(25)</span>
        </div>
        <div>
          <Button>Report</Button>
        </div>
      </div>
    </>
  );
}
