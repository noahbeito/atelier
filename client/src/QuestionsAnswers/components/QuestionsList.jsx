import React from 'react';
import Question from './Question';

export default function QuestionsList({ questions }) {
  return questions ? questions.map((question) => <Question key={question.question_id} question={question} />) : '';
}
