import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import QuestionsList from './QuestionsList';
import Button from '../../components/ui/Button';
import AddAnswer from './AddAnswer';
import AddQuestion from './AddQuestion';
import PhotoModal from './PhotoModal';

const Container = styled.div`
  margin: 0 auto;
  width: 60%;
`;

export default function QuestionsAnswers() {
  return (
    <Container>
      <h2>Questions & Answers</h2>
      <Search />
      <QuestionsList />
      <div className="button-row">
        <Button variant="large-base">More Answered Questions</Button>
        <Button variant="large-add">Add A Question</Button>
      </div>
      <AddAnswer />
      <PhotoModal />
      <AddQuestion />
    </Container>
  );
}
