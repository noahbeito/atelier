import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Icons from '../../components/Icons';

import Search from './Search';
import QuestionsList from './QuestionsList';
import Button from '../../components/ui/Button';
import AddAnswer from './AddAnswer';
import AddQuestion from './AddQuestion';
import PhotoModal from './PhotoModal';

import { fetchInitialQuestions, fetchMoreQuestions } from '../actions';

const Container = styled.div`
  margin: 0 auto;
  width: 60%;
`;

const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: gray;
`;

const getQuestionCount = (state) => state.questionsAnswers.main.questions.length;
const getQuestions = (maxQuestions) => (state) => state
  .questionsAnswers.main.questions
  .slice(0, maxQuestions);

const getIsLoading = (state) => state.product.isLoading || state.questionsAnswers.main.loading;

export default function QuestionsAnswers() {
  const [maxQuestions, setMaxQuestions] = useState(4);

  const currentQuestionCount = useSelector(getQuestionCount);
  const questions = useSelector(getQuestions(maxQuestions));
  const isLoading = useSelector(getIsLoading);

  const productId = useSelector((state) => state.product.data.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialQuestions(productId));
  }, [productId]);

  const moreQuestionsHandler = () => {
    dispatch(fetchMoreQuestions(productId));
    setMaxQuestions(Math.min(maxQuestions + 2, currentQuestionCount));
  };

  return (
    <Container>
      <h2>Questions & Answers</h2>
      <Search />
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            <QuestionsList questions={questions} />
            <div className="button-row">
              {currentQuestionCount > questions.length && <Button variant="large-base" onClick={moreQuestionsHandler}>More Answered Questions</Button>}
              <Button variant="large-add">Add A Question</Button>
            </div>
            <AddAnswer />
            <PhotoModal />
            <AddQuestion />
          </>
        )}
    </Container>
  );
}
