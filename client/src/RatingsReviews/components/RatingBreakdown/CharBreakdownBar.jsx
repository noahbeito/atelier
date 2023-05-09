import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CharBar from './CharBar';

const charTable = {
  Size: {
    1: 'A size too small',
    2: '½ a size too small',
    3: 'Perfect',
    4: '½ a size too big',
    5: 'A size too wide',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Quality: {
    1: 'Poor',
    2: 'Below Average',
    3: 'What I exepcted',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Length: {
    1: 'Runs short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs longs',
  },
};

const StyledCharBar = styled(CharBar)`
  padding-bottom: 3%;
`;

export default function CharBreakdownBar({
  CharBreakdown,
}) {
  const chars = Object.keys(CharBreakdown);

  const CharBreakdownMap = () => chars.map((char) => (
    <StyledCharBar
      key={CharBreakdown[char].id}
      value={CharBreakdown[char].value}
      charTable={charTable[char]}
      char={char}
    />
  ));

  return (
    <div>
      {CharBreakdownMap()}
    </div>
  );
}

CharBreakdownBar.propTypes = {
  CharBreakdown: PropTypes.shape({
    Fit: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),

    Width: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),

    Comfort: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),

    Quality: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),

    Length: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),

    Size: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),

  }).isRequired,
};
