import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './ui/Button';

const StyledText = styled.strong`
  color: ${(props) => props.theme.secondaryColor};
  text-decoration: underline;
`;

export default function Helpful({ helpfulness, clickedYes, ...props }) {
  return (
    <>
      <span>Helpful?</span>
      <span>
        <Button variant="small" {...props}>
          {
            clickedYes
              ? <StyledText>Yes</StyledText>
              : 'Yes'
          }
        </Button>
        (
        {helpfulness}
        )
      </span>
    </>
  );
}

Helpful.propTypes = {
  helpfulness: PropTypes.number.isRequired,
  clickedYes: PropTypes.bool.isRequired,
};
