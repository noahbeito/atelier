import styled, { css } from 'styled-components';

const LargeLetter = css`
  color: ${(props) => props.theme.secondaryColor};
  font-size: 1.8rem;
  font-family: sans-serif;
  font-weight: bold;
  margin: 0 10px;
`;
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const FlexLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

export {
  LargeLetter,
  FlexBetween,
  FlexWrap,
  FlexLeft,
};
