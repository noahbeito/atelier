import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStarBox = styled.div`
  white-space: nowrap;
  object-fit: contain;
`;

const StyledStar = styled.span`
  display:inline-block;
  position: relative;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.starBorder};
  &::before {
    display: block;
    content: "\uf005";
    font-family: "Font Awesome 5 Free";
    color: ${(props) => props.theme.background}
  }
  &::after {
    display: block;
    position:absolute;
    top: 0;
    content: "\uf005";
    font-family: "Font Awesome 5 Free";
    overflow: hidden;
    width: ${(props) => props.val * 100}%;
    color: ${(props) => props.theme.star};
  }
`;

export default function StarRating({
  rating,
  ...props
}) {
  // TODO: Need to refactor to include onClick on each start
  const roundedRating = (Math.round(rating * 4) / 4).toFixed(2);
  const fullStars = Math.floor(roundedRating);

  const starArr = [];

  for (let i = 1; i <= fullStars; i += 1) {
    starArr.push(1);
  }

  if (rating < 5) {
    const partialStar = roundedRating - fullStars;
    starArr.push(partialStar);

    const emptyStars = 5 - starArr.length;
    for (let i = 0; i < emptyStars; i += 1) {
      starArr.push(0);
    }
  }
  const id = (i, val) => new Date() + i + val;
  const star = starArr.map((val, i) => <StyledStar key={id(i, val)} id={i} val={val} />);

  return (
    <StyledStarBox {...props}>
      {star}
    </StyledStarBox>
  );
}

StarRating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
};

StarRating.defaultProps = {
  className: '',
  rating: 0,
};
