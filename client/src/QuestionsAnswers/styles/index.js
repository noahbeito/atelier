import styled, { css } from 'styled-components';

const LargeLetter = css`
  color: teal;
  font-size: 1.8rem;
  font-family: sans-serif;
  font-weight: bold;
  margin: 5px;
`;
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

export { LargeLetter, FlexBetween, FlexWrap };
