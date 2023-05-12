import styled from 'styled-components';

const List = styled.div`
 display: grid;
 grid-template-rows: 10% 90%;
 grid-template-columns: 20% 20% 20% 20% 20%;
 position: relative;
 list-style-type: none;
 overflow-x: hidden;
`;

const Container = styled.div`
  grid-area: 2 / 2 / span 1 / span 5;
  position: relative;
  align-self: center;
  height: 100%;
  overflow-x: hidden;
`;

const OutfitContainer = styled(Container)`
  grid-area: 2 / 3 / span 1 / span 5;
`;

const Title = styled.h2`
  grid-area: 1 / 2 / span 1 / span 1;
  margin-inline: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  `;

const Carousel = styled.div`
  --slider-index: 0;
  display: grid;
  gap: 1%;
  grid-auto-flow: column;
  grid-auto-columns: 24%;
  list-style-type: none;
  transform: translateX(calc(var(--slider-index) * 25%));
  transition: transform 250ms ease-in-out;
  margin-top: 1rem;
`;

const OutfitCarousel = styled(Carousel)`
  grid-auto-columns: 32.3%;
  transform: translateX(calc(var(--slider-index) * (33.3%)));
`;

const DefaultCard = styled.li`
  position: relative;
  align-self: center;
  height: 400px;
  width: 95%;
  background-color: #CDCDCD;
  border-radius: 5px;

  padding: 0.5rem;
  z-index: 9;
  cursor: pointer;
`;

const AddCard = styled(DefaultCard)`
  grid-area: 2 / 2 / span 1 / span 1;
  position: relative;
  width: 92%;
  z-index: 9;
`;

const Card = styled(DefaultCard)`
  border: none;
`;

const ChevronButton = styled.button`
  align-self: center;
  height: 80%;
  width: 20%;
  z-index: 10;
  opacity: 60%;
`;

const StyledRightButton = styled(ChevronButton)`
  grid-area: 2 / 5 / span 1 / span 1;
  justify-self: end;
`;

const StyledLeftButton = styled(ChevronButton)`
  grid-area: 2 / 2 / span 1 / span 1;
`;

const StyledLeftOutfitButton = styled(StyledLeftButton)`
    grid-area: 2 / 3 / span 1 / span 1;
`;

export {
  Title,
  DefaultCard,
  Card,
  AddCard,
  Carousel,
  OutfitCarousel,
  Container,
  OutfitContainer,
  List,
  StyledRightButton,
  StyledLeftButton,
  StyledLeftOutfitButton,
};
