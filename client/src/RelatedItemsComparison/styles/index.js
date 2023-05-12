import styled from 'styled-components';

const Title = styled.h2`
  margin-inline: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const DefaultCard = styled.li`
  position: relative;
  height: 400px;
  max-width: 300px;
  background-color: #CDCDCD;
  border-radius: 5px;

  padding: 0.5rem;
  z-index: 9;
  // scroll-snap-align: start;
  cursor: pointer;
`;

const Card = styled(DefaultCard)`
  border: none;
`;

const Carousel = styled.div`
  --slider-index: 0;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-auto-columns: 23%;
  list-style-type: none;
  transform: translateX(calc(var(--slider-index) * 25%));
  transition: transform 250ms ease-in-out;

  /* overflow-x: auto;
  overscroll-behavior-inline: contain; */

  //scroll-snap-type: inline mandatory; // this might change when implementing right/left buttons
`;

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 10px 0px;
  overflow-x: hidden;
  /* scroll-snap-type: inline mandatory; */
`;

const List = styled.div`
 position: relative;
 margin-left: 20%;
`;

export {
  Title, DefaultCard, Card, Carousel, Container, List,
};
