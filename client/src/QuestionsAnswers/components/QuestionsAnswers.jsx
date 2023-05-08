import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Icons from '../../components/Icons';

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

const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: gray;
`;

export default function QuestionsAnswers() {
  const isLoading = useSelector((state) => state.product.isLoading
                                        || state.questionsAnswers.main.loading);
  console.log('loading', isLoading);
  const productId = useSelector((state) => state.product.data.id);
  const dispatch = useDispatch();

  console.log(productId);

  useEffect(() => {
    if (productId) {
      dispatch({ type: '@questions/FETCH_DATA' });
      axios.get('/qa/questions/', { params: { product_id: productId } })
        .then((result) => {
          dispatch({ type: '@questions/SET_DATA', payload: result.data });
        })
        .catch((error) => {
          dispatch({ type: '@questions/FETCH_FAILED', payload: error });
        });
    }
  }, [productId]);
  return (
    <Container>
      <h2>Questions & Answers</h2>
      <Search />
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            <QuestionsList />
            <div className="button-row">
              <Button variant="large-base">More Answered Questions</Button>
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
