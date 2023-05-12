import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

import AnswersList from './AnswersList';
import Button from '../../components/ui/Button';
import Divider from '../../components/Divider';
import Helpful from '../../components/Helpful';
import Report from '../../components/Report';
import Popup from '../../components/Popup';
import AddAnswer from './AddAnswer';

import { LargeLetter, FlexBetween } from '../styles';

const StyledQuestion = styled.div`
  position: relative;
  & .question {
    font-size: 1.4rem;
    font-weight: bold;
    &::before {
      content: "Q";
      ${LargeLetter}
    }
  }
  & .accordion-title {
    border-radius: 5px;
    padding: 10px 40px 10px 0;
    background-color: #eee;
    border-bottom: 2px solid ${(props) => props.theme.secondaryColor};
    margin-top: 10px;
    position: relative;
    cursor: pointer;

    &:hover .question {
      color: ${(props) => props.theme.secondaryColor};
    }
    &.open:not(.empty-chevron)::after, &.closed:not(.empty-chevron)::after {
      content: '\uf077';
      position: absolute;
      top: 50%;
      right: 15px;
      font-family: "Font Awesome 5 Free";
      transition: 0.5s;
    }
    &.open::after {
      transform: translateY(-50%) scaleY(1);
    }
    &.closed::after {
      transform: translateY(-50%) scaleY(-1);
    }
  }

  & .big-A {
    ${LargeLetter}
    top: 0;
    position: sticky;
  }
  & .accordion-body {
    transition: 0.5s ease-in-out;
    overflow: scroll;
  }
  & .open + .accordion-body {
    max-height: 50vh;
  }
  & .closed + .accordion-body {
    max-height: 0;
  }
`;

export default function Question({ question }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const answerCount = useRef(Object.entries(question.answers).length);
  const dispatch = useDispatch();

  const handleAccordionClick = () => {
    setShowAnswers(!showAnswers);
  };

  const handleHelpful = (e) => {
    e.stopPropagation();
    axios.put(`/qa/questions/${question.question_id}/helpful`)
      .then(() => {
        dispatch({ type: '@questions/MARK_HELPFUL', question_id: question.question_id });
      });
  };

  const modalRef = useRef();
  const handleCloseModal = () => modalRef.current.closeModal();
  const handleAddAnswer = (e) => {
    e.stopPropagation();
    modalRef.current.openModal();
  };

  const handleReportQuestion = (e) => {
    e.stopPropagation();
    axios.put(`/qa/questions/${question.question_id}/report`)
      .then(() => {
        dispatch({ type: '@questions/REPORT', question_id: question.question_id });
      });
  };
  return (
    <>
      <StyledQuestion>
        <FlexBetween
          className={`accordion-title ${((showAnswers && answerCount.current !== 0) ? 'open' : 'closed')} ${answerCount.current === 0 ? 'empty-chevron' : ''}`}
          onClick={handleAccordionClick}
        >
          <span data-testid="question" className="question">{question.question_body}</span>
          <span>
            <Divider>
              <Helpful helpfulness={question.question_helpfulness || 0} onClick={handleHelpful} />
              <Button variant="small" onClick={handleAddAnswer}>Add Answer</Button>
              <Report onClick={handleReportQuestion} />
            </Divider>
          </span>
        </FlexBetween>
        <div className="accordion-body">
          {answerCount.current !== 0
            ? (
              <>
                <span className="big-A">A</span>
                <AnswersList className="answers" questionId={question.question_id} />
              </>
            )
            : ''}
        </div>
      </StyledQuestion>
      <Popup ref={modalRef}>
        <AddAnswer handleCloseModal={handleCloseModal} />
      </Popup>
    </>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number,
    answers: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      answerer_name: PropTypes.string,
      helpfulness: PropTypes.number,
      photos: PropTypes.arrayOf(PropTypes.string),
    })),
    question_body: PropTypes.string,
    question_helpfulness: PropTypes.number,
  }).isRequired,
};
