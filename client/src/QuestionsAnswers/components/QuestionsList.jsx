import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';

export default function QuestionsList() {
  const questions = useSelector((state) => state.questionsAnswers.main.questions.results);
  return questions ? questions.map((question) => <Question key={question.question_id} question={question} />) : '';
}
