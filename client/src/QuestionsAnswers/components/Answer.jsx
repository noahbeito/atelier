import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Divider from '../../components/Divider';
import Helpful from '../../components/Helpful';
import Report from '../../components/Report';
import NameDate from '../../components/NameDate';
import PhotoList from './PhotoList';

const StyledAnswer = styled.div`
  margin-bottom: 10px;
  padding: 5px 5px;

  & p {
    display: inline;
    font-size: 1.1rem;
  }
`;

export default function Answer({ answer }) {
  const [clickedYes, setClickedYes] = useState(false);
  const [clickedReport, setClickedReport] = useState(false);

  const dispatch = useDispatch();

  const handleHelpful = () => {
    const temp = clickedYes;
    if (!clickedYes) {
      setClickedYes(true);
      axios.put(`/qa/answers/${answer.id}/helpful`)
        .then(() => {
          dispatch({ type: '@answers/MARK_HELPFUL', answer_id: answer.id });
          setClickedYes(true);
        })
        .catch(() => setClickedYes(temp));
    }
  };

  const handleReportAnswer = () => {
    const temp = clickedReport;
    if (!clickedReport) {
      setClickedReport(true);
      axios.put(`/qa/answers/${answer.id}/report`)
        .then(() => {
          dispatch({ type: '@answers/REPORT', answer_id: answer.id });
          setClickedReport(true);
        })
        .catch(() => setClickedReport(temp));
    }
  };

  return (
    <StyledAnswer>
      <p>{answer.body}</p>
      <PhotoList photos={answer.photos} />
      <div style={{ marginTop: '10px', color: '#666' }} data-testid="answer-bar">
        <Divider>
          <NameDate
            username={answer.answerer_name}
            date={answer.date}
            includeBy
          />
          <Helpful
            helpfulness={answer.helpfulness}
            clickedYes={clickedYes}
            onClick={handleHelpful}
          />
          <Report clickedReport={clickedReport} onClick={handleReportAnswer} />
        </Divider>
      </div>
    </StyledAnswer>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    answerer_name: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PhotoList.propTypes.photos,
    id: PropTypes.number,
  }).isRequired,
};
