import React from 'react';
import styled from 'styled-components';

import Answer from './Answer';
import Button from '../../components/ui/Button';

const Rule = styled.hr`
  border: 1px solid black;
  margin-bottom: 20px;
`;

const StyledAnswers = styled.div`
  position: relative;
  width: 90%;
  left: 1.8rem;
  bottom: 1.8rem;
`;

export default function AnswersList({ answers }) {
  return (
    <StyledAnswers>
      {
        Object.entries(answers).map(([answerId, answer]) => (
          <>
            <Answer key={answerId} answer={answer} />
            <Rule key={`r-${answerId}`} />
          </>
        ))
      }
      <Button variant="medium">Load More Answers</Button>
    </StyledAnswers>
  );
}
