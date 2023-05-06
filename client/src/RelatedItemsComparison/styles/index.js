import styled from 'styled-components';

const Card = styled.div`
  height: 300px;
  border: 1px solid black;
  border-radius: 5px;
  // margin-left: 1rem; having trouble matching this on related items list. this is the space to the left of the list.

  padding: 1rem;

  scroll-snap-align: start;
`;

const Button = styled.button`
`;

export { Card, Button };
