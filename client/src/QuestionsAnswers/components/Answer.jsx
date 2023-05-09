import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
          <Helpful helpfulness={answer.helpfulness} />
          <Report />
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
  }).isRequired,
};
