import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';

export default function QuestionsList({ questions }) {
  const searchText = useSelector((state) => state.questionsAnswers.search.text);

  return questions
    ? questions
      .filter((question) => question.question_body.toLowerCase().includes(searchText.toLowerCase()))
      .map((question) => <Question key={question.question_id} question={question} />)
    : '';
}
