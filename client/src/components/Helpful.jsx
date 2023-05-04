import React from 'react';
import Button from './ui/Button';

export default function Helpful({ helpfulness, onClick }) {
  return (
    <>
      <div>Helpful?</div>
      <div>
        <Button variant="small">Yes</Button>
        (25)
      </div>
    </>
  );
}
