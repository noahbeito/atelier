import React, { useState } from 'react';
import styled from 'styled-components';

import AnswersList from './AnswersList';
import Button from '../../components/ui/Button';
import Divider from '../../components/Divider';
import Helpful from '../../components/Helpful';
import Report from '../../components/Report';

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
    padding: 10px 15px 10px 0;
    background-color: #eee;
    border-bottom: 2px solid ${(props) => props.theme.secondaryColor};
    margin-top: 10px;
    cursor: pointer;
    &:hover .question {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
  & .big-A {
    ${LargeLetter}
    top: 0;
    position: sticky;
  }
  & .accordion-body {
    transition: 0.2s;
    overflow: scroll;
  }
  & .open + .accordion-body {
    max-height: 50vh;
  }
  & .closed + .accordion-body {
    max-height: 0;
  }
`;

export default function Question() {
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAccordionClick = () => {
    setShowAnswers(!showAnswers);
  };

  const handleHelpful = (e) => {
    e.stopPropagation();
  };

  const handleAddAnswer = (e) => {
    e.stopPropagation();
  };

  const handleReportQuestion = (e) => {
    e.stopPropagation();
  };

  return (
    <StyledQuestion>
      <FlexBetween className={`accordion-title ${(showAnswers ? 'open' : 'closed')}`} onClick={handleAccordionClick}>
        <span className="question">Who what which?</span>
        <span>
          <Divider>
            <Helpful helpfulness={18} onClick={handleHelpful} />
            <Button variant="small" onClick={handleAddAnswer}>Add Answer</Button>
            <Report onClick={handleReportQuestion} />
          </Divider>
        </span>
      </FlexBetween>
      <div className="accordion-body">
        <span className="big-A">A</span>
        <AnswersList className="answers" />
      </div>
    </StyledQuestion>
  );
}
