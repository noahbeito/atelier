import styled from 'styled-components';

const List = styled.div`
 position: relative;
 margin-left: 20%;
 list-style-type: none;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 10px 0px;
  overflow-x: hidden;
  /* scroll-snap-type: inline mandatory; */
  `;

const Title = styled.h2`
  margin-inline: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  `;

const Carousel = styled.div`
  --slider-index: 0;
  display: grid;
  gap: 1.5rem;
  grid-auto-flow: column;
  grid-auto-columns: 23%;
  list-style-type: none;
  transform: translateX(calc(var(--slider-index) * 25%));
  transition: transform 250ms ease-in-out;
  /* overflow-x: auto;
  overscroll-behavior-inline: contain; */

  //scroll-snap-type: inline mandatory; // this might change when implementing right/left buttons
`;

const OutfitCarousel = styled(Carousel)`
grid-auto-columns: 28%;
`;

const DefaultCard = styled.li`
  position: relative;
  height: 400px;
  width: 100%;
  background-color: #CDCDCD;
  border-radius: 5px;

  padding: 0.5rem;
  z-index: 9;
  // scroll-snap-align: start;
  cursor: pointer;
`;

const Card = styled(DefaultCard)`
  border: none;
  // margin: 0.5rem;
`;

export {
  Title, DefaultCard, Card, Carousel, OutfitCarousel, Container, List,
};
