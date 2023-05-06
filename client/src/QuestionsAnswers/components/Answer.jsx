import React from 'react';
import styled from 'styled-components';

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

export default function Answer() {
  return (
    <StyledAnswer>
      <p>Tootsie Roll Pudding</p>
      <PhotoList />
      <div>
        <Divider>
          <NameDate
            username="User1337"
            date="May 1, 2019"
            includeBy
          />
          <Helpful helpfulness={2} />
          <Report />
        </Divider>
      </div>
    </StyledAnswer>
  );
}
