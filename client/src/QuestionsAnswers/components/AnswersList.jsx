import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Answer from './Answer';
import Button from '../../components/ui/Button';

const Rule = styled.hr`
  border: 1px solid black;
  margin-bottom: 20px;
  margin-left: 10px;
`;

const StyledAnswers = styled.div`
  position: relative;
  width: 90%;
  left: 1.8rem;
  bottom: 1.8rem;
`;
const sortAnswers = (arr) => {
  arr.sort((x, y) => {
    const isSellerX = x.answerer_name === 'Seller';
    const isSellerY = y.answerer_name === 'Seller';

    if (isSellerX && !isSellerY) {
      return -1;
    }
    if (!isSellerX && isSellerY) {
      return 1;
    }

    const helpfulX = x.helpfulness;
    const helpfulY = y.helpfulness;
    if (helpfulX > helpfulY) {
      return -1;
    }
    if (helpfulX < helpfulY) {
      return 1;
    }
    return 0;
  });

  return arr;
};

export default function AnswersList({ questionId }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxAnswers, setMaxAnswers] = useState(2);

  const [answers, currentAnswersCount] = useSelector((state) => {
    const arr = state.questionsAnswers.main.questions;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].question_id === questionId) {
        const res = sortAnswers(Object.values(arr[i].answers));
        return [
          res.slice(0, maxAnswers),
          res.length,
        ];
      }
    }
    return [[], 0];
  });

  const toggleLoadMoreAnswers = () => {
    setIsExpanded(!isExpanded);
    setMaxAnswers(!isExpanded ? Math.min(100, currentAnswersCount) : 2);
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
      {
      currentAnswersCount > 2 && (
        <Button variant="medium" onClick={toggleLoadMoreAnswers}>
          {isExpanded ? 'Collapse Answers' : 'See More Answers'}
        </Button>
      )
      }
    </StyledAnswers>
  );
}

AnswersList.propTypes = {
  questionId: PropTypes.number.isRequired,
};
