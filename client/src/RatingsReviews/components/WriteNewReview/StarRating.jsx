import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StyledFlexParent = styled.div`
  display: block;
`;

const StyledFlexChild = styled(StyledFlexParent)`
  display: block;
`;

export default function StarRating({
  // handleSetCharactistic,
  ratings,
  setRatings,
  char,
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    setRatings({ ...ratings, [char]: index });
  };

  return (
    <StyledFlexParent className="star-rating">
      <StyledFlexChild>
        {char}
      </StyledFlexChild>
      <StyledFlexChild>
        {[...Array(5)].map((star, index) => {
        // eslint-disable-next-line no-param-reassign
          index += 1;
          return (
            <StyledButton
              type="button"
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              {
            index <= (hover || rating)
              ? <Icons.Star />
              : <Icons.EmptyStar />
            }
            </StyledButton>
          );
        })}
      </StyledFlexChild>
    </StyledFlexParent>
  );
}

StarRating.propTypes = {
  setRatings: PropTypes.func.isRequired,
  ratings: PropTypes.objectOf(PropTypes.number).isRequired,
  char: PropTypes.string.isRequired,
};
