import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from './Question';

const Scroll = styled.div`
  max-height: 100vh;
  overflow: scroll;
`;

export default function QuestionsList({ questions }) {
  const searchText = useSelector((state) => state.questionsAnswers.search.text);

  return (
    <Scroll>
      {
        questions
          ? questions
            .filter((question) => searchText.length < 3
            || question.question_body.toLowerCase().includes(searchText.toLowerCase()))
            .map((question) => <Question key={question.question_id} question={question} />)
          : ''
      }
    </Scroll>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(Question.propTypes).isRequired,
};
