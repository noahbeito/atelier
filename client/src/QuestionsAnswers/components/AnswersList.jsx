import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

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

export default function AnswersList({ questionId }) {
  const [maxAnswers, setMaxAnswers] = useState(2);

  console.log('MAX ANSWERS', maxAnswers);

  const [answers, currentAnswersCount] = useSelector((state) => {
    const arr = state.questionsAnswers.main.questions;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].question_id === questionId) {
        const res = Object.values(arr[i].answers).sort((a, b) => b.helpfulness - a.helpfulness);
        return [
          res.slice(0, maxAnswers),
          res.length,
        ];
      }
    }
    return [[], 0];
  });

  const handleLoadMoreAnswers = () => {
    setMaxAnswers(Math.min(100, currentAnswersCount));
  };

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
      {currentAnswersCount > answers.length && <Button variant="medium" onClick={handleLoadMoreAnswers}>Load More Answers</Button>}
    </StyledAnswers>
  );
}

AnswersList.propTypes = {
};
