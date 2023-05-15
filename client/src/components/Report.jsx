import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './ui/Button';

const StyledText = styled.strong`
  color: ${(props) => props.theme.secondaryColor};
`;

export default function Report({ clickedReport, ...props }) {
  return (
    <Button variant="small" {...props}>
      {
        clickedReport
          ? <StyledText>Reported</StyledText>
          : 'Report'
      }
    </Button>
  );
}

Report.propTypes = {
  clickedReport: PropTypes.bool.isRequired,
};
