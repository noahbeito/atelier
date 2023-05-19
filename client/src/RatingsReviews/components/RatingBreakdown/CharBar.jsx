import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  flex-grow: 1;
`;

const StyledCharBar = styled(StyledFlex)`
  height: .6em;
  background-color: ${(props) => props.theme.background};

  &::after {
    content: "\uf0d7";
    font-family: "Font Awesome 5 Free";
    font-size: 150%;
    position: absolute;
    top: -150%;
    left: ${(props) => props.value * 100}%;
    color: ${(props) => props.theme.textColor};
  }
`;

const StyledCharBarMid = styled(StyledFlex)`
  border-left: 0.6em solid ${(props) => props.theme.primaryColor};
  border-right: 0.6em solid ${(props) => props.theme.primaryColor};
`;

const StyledCharBarValueLeft = styled(StyledFlex)`
  justify-content: flex-start;
  font-size: 80%;
`;

const StyledCharBarValueMid = styled(StyledFlex)`
  justify-content: center;
  font-size: 80%;
`;

const StyledCharBarValueRight = styled(StyledFlex)`
  justify-content: flex-end;
  font-size: 80%;
`;

const StyledCharsBar = styled.div`
  padding-bottom: 3%;
`;

export default function CharBar({
  char,
  charTable,
  value,
}) {
  const valuePercent = Number(value) / 5;

  return (
    <StyledCharsBar className="CharsBar">
      <div>
        {char}
      </div>
      <StyledCharBar className="CharBar" value={valuePercent}>
        <StyledFlex />
        <StyledCharBarMid />
        <StyledFlex />
      </StyledCharBar>
      <StyledFlex className="CharBarValues">
        <StyledCharBarValueLeft>
          {charTable['1']}
        </StyledCharBarValueLeft>
        <StyledCharBarValueMid>
          {charTable['3']}
        </StyledCharBarValueMid>
        <StyledCharBarValueRight>
          {charTable['5']}
        </StyledCharBarValueRight>
      </StyledFlex>
    </StyledCharsBar>
  );
}

CharBar.propTypes = {
  char: PropTypes.string.isRequired,
  charTable: PropTypes.shape({
    1: PropTypes.string.isRequired,
    2: PropTypes.string.isRequired,
    3: PropTypes.string.isRequired,
    4: PropTypes.string.isRequired,
    5: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
};
