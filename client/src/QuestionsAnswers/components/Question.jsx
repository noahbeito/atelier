import React from 'react';
import styled from 'styled-components';

import AnswersList from './AnswersList';
import Button from '../../components/ui/Button';
import Divider from '../../components/Divider';
import Helpful from '../../components/Helpful';
import Report from '../../components/Report';

import { LargeLetter, FlexBetween } from '../styles';

const StyledQuestion = styled.div`
  width: 1000px;
  & .question {
    font-size: 1.4rem;
    font-weight: bold;
  }
  & .question::before {
    content: "Q";
    ${LargeLetter}
  }
  & .big-A {
    ${LargeLetter}
  }
`;

export default function Question() {
  return (
    <StyledQuestion>
      <FlexBetween>
        <span className="question">Who what which?</span>
        <span>
          <Divider>
            <Helpful helpfulness={18} />
            <Button variant="small">Add Answer</Button>
            <Report />
          </Divider>
        </span>
      </FlexBetween>
      <div>
        <span className="big-A">A</span>
        <AnswersList className="answers" />
      </div>
    </StyledQuestion>
  );
}
