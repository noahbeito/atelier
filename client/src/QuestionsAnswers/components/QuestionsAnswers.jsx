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

/* * Styles * */
const Container = styled.div`
  margin: 3rem auto;
  width: 60%;
  color: ${({ theme }) => theme.textColor};
  .main-title {
    font-size: 2rem;
    font-family: 'Inter';
    margin: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.bpMobile}) {
    width: 80%;
  }
`;

const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: ${(props) => props.theme.loading};
`;

/* * Selectors * */
const getIsLoading = (state) => state.product.isLoading || state.questionsAnswers.main.loading;

export default function QuestionsAnswers() {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.questionsAnswers.search.text);
  const questions = useSelector((state) => state.questionsAnswers.main.questions);
  const isLoading = useSelector(getIsLoading);
  const product = useSelector((state) => state.product.data);

  const [maxQuestions, setMaxQuestions] = useState(4);

  // Attaches reference to open and close functions from within modal
  const modalRef = useRef();
  const handleAddQuestion = () => modalRef.current.openModal();
  const handleCloseModal = () => modalRef.current.closeModal();

  useEffect(() => {
    dispatch(fetchInitialQuestions(product.id));
  }, [product.id]);

  const moreQuestionsHandler = async () => {
    if (searchText.length < 3) {
      await dispatch(fetchMoreQuestions(product.id));
      setMaxQuestions(Math.min(maxQuestions + 2, questions.length));
      return;
    }
    const newQuestions = [];

    const loopQuestions = async () => {
      const data = await dispatch(fetchMoreQuestions(product.id));
      newQuestions.push(...data.results);
      const filtered = newQuestions.filter((question) => question
        .question_body.toLowerCase().includes(searchText.toLowerCase()));
      if (filtered.length < 2 && data.results.length > 0) {
        await loopQuestions();
      }
    };

    await loopQuestions();
    setMaxQuestions(maxQuestions + newQuestions.length + 1);
  };

  /* * Structure * */
  return (
    <Container>
      <h2 className="main-title">Questions & Answers</h2>
      <Search />
      {isLoading ? <StyledLoading data-testid="loading"><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            <QuestionsList questions={questions.slice(0, maxQuestions)} />
            <FlexLeft>
              {questions.length > maxQuestions && <Button variant="large-base" onClick={moreQuestionsHandler}>More Answered Questions</Button>}
              <Button variant="large-add" onClick={handleAddQuestion}>Add A Question</Button>
            </FlexLeft>
            <Popup ref={modalRef} titles={['Ask Your Question', `About the ${product.name}`]}>
              <AddQuestion productId={product.id} handleCloseModal={handleCloseModal} />
            </Popup>
          </>
        )}
    </Container>
  );
}
