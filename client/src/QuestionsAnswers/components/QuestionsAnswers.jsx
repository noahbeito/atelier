import React from 'react';
import Search from './Search';
import QuestionsList from './QuestionsList';
import Button from '../../components/ui/Button';
import AddAnswer from './AddAnswer';
import AddQuestion from './AddQuestion';
import PhotoModal from './PhotoModal';

export default function QuestionsAnswers() {
  return (
    <div>
      <h2>Questions & Answers</h2>
      <Search />
      <QuestionsList />
      <div>
        <Button variant="large-base">More Answered Questions</Button>
        <Button variant="large-add">Add A Question</Button>
      </div>
      <AddAnswer />
      <PhotoModal />
      <AddQuestion />
    </div>
  );
}
