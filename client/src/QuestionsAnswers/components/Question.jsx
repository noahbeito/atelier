import React from 'react';
import AnswersList from './AnswersList';
import Button from '../../components/ui/Button';
import Divider from '../../components/Divider';
import Helpful from '../../components/Helpful';
import Report from '../../components/Report';

export default function Question() {
  return (
    <>
      <div>
        <div>Q:</div>
        <div>Who what which?</div>
        <div>
          <Divider>
            <Helpful />
            <div>
              <Button variant="small">Add Answer</Button>
            </div>
            <Report />
          </Divider>
        </div>
      </div>
      <div>
        <div>A:</div>
        <AnswersList />
      </div>
      <Button variant="medium">Load More Answers</Button>
    </>
  );
}
