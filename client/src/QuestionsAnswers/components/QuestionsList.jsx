import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';

export default function QuestionsList({ questions }) {
  console.log('QUESTIONS', questions);
  return questions ? questions.map((question) => <Question key={question.question_id} question={question} />) : '';
}
