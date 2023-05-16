import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from './Question';

const Scroll = styled.div`

  max-height: calc(100vh - 300px);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin: 15px;
  gap: 10px;
`;

export default function QuestionsList({ questions }) {
  const searchText = useSelector((state) => state.questionsAnswers.search.text);
  let questionText;
  if (questions.length > 0) {
    questionText = questions
      .filter((question) => searchText.length < 3
      || question.question_body.toLowerCase().includes(searchText.toLowerCase()))
      .map((question) => (
        <Question
          key={question.question_id}
          question={question}
          searchText={searchText || ''}
        />
      ));
  } else if (searchText.length === 0) {
    questionText = 'No Questions Available';
  }

  if (questionText.length === 0) {
    questionText = `There are no questions to match query "${searchText}"`;
  }

  return <Scroll>{questionText}</Scroll>;
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(Question.propTypes).isRequired,
};
