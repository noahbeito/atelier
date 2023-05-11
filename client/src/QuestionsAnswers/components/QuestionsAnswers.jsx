import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Icons from '../../components/Icons';

import Search from './Search';
import QuestionsList from './QuestionsList';
import Button from '../../components/ui/Button';
import AddQuestion from './AddQuestion';
import Popup from '../../components/Popup';
import { FlexLeft } from '../styles';

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

  // Attaches reference to open and close functions from within modal
  const modalRef = useRef();
  const handleAddQuestion = () => modalRef.current.openModal();
  const handleCloseModal = () => modalRef.current.closeModal();

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
            <FlexLeft>
              {currentQuestionCount > questions.length && <Button variant="large-base" onClick={moreQuestionsHandler}>More Answered Questions</Button>}
              <Button variant="large-add" onClick={handleAddQuestion}>Add A Question</Button>
            </FlexLeft>
            <Popup ref={modalRef}>
              <AddQuestion handleCloseModal={handleCloseModal} />
            </Popup>
          </>
        )}
    </Container>
  );
}
