import React from 'react';
import Search from './Search';
import QuestionsList from './QuestionsList';
import Button from '../../components/Button';

export default function QuestionsAnswers() {
  return (
    <div>
      <h2>Questions & Answers</h2>
      <Search />
      <QuestionsList />
      <div>
        <Button>More Answered Questions</Button>
        <Button>Add A Question</Button>
      </div>
    </div>
  );
}
