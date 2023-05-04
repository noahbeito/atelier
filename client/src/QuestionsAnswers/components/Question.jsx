import React from 'react';
import AnswersList from './AnswersList';
import Button from '../../components/Button';

export default function Question() {
  return (
    <>
      <div>
        <div>Q:</div>
        <div>Who what which?</div>
        <div>
          <span>Helpful?</span>
          <Button>Yes</Button>
          <span>(25)</span>
        </div>
        <div>
          <Button>Add Answer</Button>
        </div>
        <div>
          <Button>Report</Button>
        </div>
      </div>
      <div>
        <div>A:</div>
        <AnswersList />
      </div>
      <Button>Load More Answers</Button>
    </>
  );
}
