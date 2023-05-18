import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Answer from './Answer';
import Button from '../../components/ui/Button';
import sortAnswers from '../../utils/sortHelpfulness';

const Rule = styled.hr`
  border: 1px solid ${({ theme }) => theme.textColor};
  margin-bottom: 20px;
  margin-left: 10px;
`;

const StyledAnswers = styled.div`
  position: relative;
  width: 90%;
  left: 1.8rem;
  bottom: 1.8rem;
`;

export default function AnswersList({ questionId }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxAnswers, setMaxAnswers] = useState(2);

  const answers = useSelector((state) => {
    const arr = state.questionsAnswers.main.questions;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].question_id === questionId) {
        const res = sortAnswers(Object.values(arr[i].answers), 'answerer_name');
        return res;
      }
    }
    return [];
  });

  const toggleLoadMoreAnswers = () => {
    setIsExpanded(!isExpanded);
    setMaxAnswers(!isExpanded ? Math.min(100, answers.length) : 2);
  };

  return (
    <StyledAnswers>
      {
        Object.entries(answers.slice(0, maxAnswers)).map(([answerId, answer]) => (
          <>
            <Answer key={answerId} answer={answer} />
            <Rule key={`r-${answerId}`} />
          </>
        ))
      }
      {
      answers.length > 2 && (
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
