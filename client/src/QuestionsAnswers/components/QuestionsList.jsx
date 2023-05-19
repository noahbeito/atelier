import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from './Question';
import Icons from '../../components/Icons';

const Scroll = styled.div`

  max-height: calc(100vh - 300px);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin: 15px;
  gap: 10px;
`;

const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: ${(props) => props.theme.loading};
`;

const getIsLoading = (state) => state.product.isLoading || state.questionsAnswers.main.loading;
export default function QuestionsList({ questions }) {
  const searchText = useSelector((state) => state.questionsAnswers.search.text);

  const isLoading = useSelector(getIsLoading);

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

  // Generate fake data
  const data = [];
  const max = 70;
  const min = 30;
  for (let i = 0; i < Math.max(3, questions.length); i += 1) {
    const length = Math.floor(Math.random() * (max - min)) + min;
    let str = '';
    for (let j = 0; j < length; j += 1) {
      str += !Math.floor(Math.random() * 10) ? ' ' : '#';
    }
    data.push(str);
  }

  const fakeText = data.map((question) => ({
    question_id: (new Date() + Math.floor(Math.random() * 10000000)).toString(36),
    question_body: question,
    quesion_date: '#',
    asker_name: '####',
    question_helpfulness: '#',
    reported: false,
    answers: [],
  })).map((question) => (
    <Question
      key={question.question_id}
      question={question}
      searchText=""
      fake
    />
  ));

  return isLoading ? (
    <>
      <Scroll>{fakeText}</Scroll>
      <StyledLoading data-testid="loading"><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
    </>
  ) : (
    <Scroll>{questionText}</Scroll>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(Question.propTypes).isRequired,
};
