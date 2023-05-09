import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  const handleHelpful = () => {
    dispatch({ type: '@answers/MARK_HELPFUL', answer_id: answer.id });
  };

  const handleReportAnswer = () => {
    dispatch({ type: '@answers/REPORT', answer_id: answer.id });
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
          <Helpful helpfulness={answer.helpfulness} onClick={handleHelpful} />
          <Report onClick={handleReportAnswer} />
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
