import styled from 'styled-components';

// GLOBAL STYLES FOR RELATED ITEMS WIDGET ** //
const List = styled.div`
 display: grid;
 grid-template-rows: 10% 90%;
 grid-template-columns: 25% 25% 25% 25%;
 width: 80%;
 margin: 0 auto;
 position: relative;
 list-style-type: none;
 overflow-x: hidden;
`;

const Container = styled.div`
  grid-area: 2 / 1 / span 1 / span 4;
  position: relative;
  align-self: center;
  height: 100%;
  overflow-x: hidden;
`;

const OutfitContainer = styled(Container)`
  grid-area: 2 / 2 / span 1 / span 4;
`;

const Title = styled.h2`
  grid-area: 1 / 1 / span 1 / span 1;
  min-width: 200px;
  margin-inline: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textColor};
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
  padding-left: 1rem;

  @media (max-width: ${(props) => props.theme.bpTablet}) {
    grid-auto-columns: 32.3%;
    gap: 1.1%;
    transform: translateX(calc(var(--slider-index) * (33.3%)));
  }
`;

const OutfitCarousel = styled(Carousel)`
  grid-auto-columns: 32.3%;
  gap: 1.1%;
  transform: translateX(calc(var(--slider-index) * (33.3%)));

  @media (max-width: ${(props) => props.theme.bpTablet}) {
    grid-auto-columns: 49%;
    gap: 1%;
    transform: translateX(calc(var(--slider-index) * (50%)));
  }
`;

const DefaultCard = styled.li`
  position: relative;
  align-self: center;
  height: 400px;
  width: 95%;
  /* max-width: 275px; */
  background-color: ${(props) => props.theme.background};
  border-radius: 3px;

  padding: 0.5rem;
  z-index: 9;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.05);
  }
`;

const AddCard = styled(DefaultCard)`
  grid-area: 2 / 1 / span 1 / span 1;
  position: relative;
  width: 90%;
  z-index: 9;
  margin-left: 1rem;
  margin-bottom: 0.1rem;
`;

const Card = styled(DefaultCard)`
  border: none;
`;

const ChevronButton = styled.button`
  align-self: center;
  height: 84%;
  width: 20%;
  color: ${(props) => props.theme.primaryColor};
  -webkit-text-stroke: 5px black;
  font-size: 1.5em;
  z-index: 10;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  .chevron {
    font-weight: 900;
  }
  &:hover {
    transform: scale(1.1);
    background-color: rgba(0, 128, 128, 0.8);
    transition: background-color 500ms, transform 500ms ease-in-out;
  }
`;

const StyledRightButton = styled(ChevronButton)`
  grid-area: 2 / 4 / span 1 / span 1;
  justify-self: end;
`;

const StyledLeftButton = styled(ChevronButton)`
  grid-area: 2 / 1 / span 1 / span 1;
`;

const StyledLeftOutfitButton = styled(StyledLeftButton)`
    grid-area: 2 / 2 / span 1 / span 1;
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
