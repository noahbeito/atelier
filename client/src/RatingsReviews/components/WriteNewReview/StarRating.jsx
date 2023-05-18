import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

const charTable = {
  Size: {
    1: 'A size too small',
    2: '½ a size too small',
    3: 'Perfect',
    4: '½ a size too big',
    5: 'A size too wide',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Quality: {
    1: 'Poor',
    2: 'Below Average',
    3: 'What I exepcted',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Length: {
    1: 'Runs short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs longs',
  },
  Overall: {
    1: 'Bad',
    2: 'Below Average',
    3: 'Average',
    4: 'Above Average',
    5: 'Best',
  },
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StyledFlexParent = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledFlexChar = styled(StyledFlexParent)`
  min-width: 33%;
  justify-content: center;
`;

const StyledEmptyStar = styled(Icons.EmptyStar)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: gray;
  color: #C3C3C3;
  font: 200%;
`;

const StyledStar = styled(Icons.Star)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: gray;
  color: ${(props) => props.theme.star};
  font: 200%;
`;

export default function StarRating({
  demo,
  ratings,
  setRatings,
  char,
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (demo) {
      setRating(4);
    }
  }, [demo]);

  const handleClick = (index) => {
    setRating(index);
    setRatings({ ...ratings, [char]: index });
  };

  return (
    <StyledFlexParent className="star-rating">
      <StyledFlexChar>
        {char}
      </StyledFlexChar>
      <StyledFlexChar>
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
              ? <StyledStar size="1.5" />
              : <StyledEmptyStar />
            }
            </StyledButton>
          );
        })}
      </StyledFlexChar>
      <StyledFlexChar>
        {
          rating
            ? charTable[char][rating]
            : 'None selected'
        }
      </StyledFlexChar>
    </StyledFlexParent>
  );
}

StarRating.propTypes = {
  setRatings: PropTypes.func.isRequired,
  ratings: PropTypes.objectOf(PropTypes.number).isRequired,
  char: PropTypes.string.isRequired,
  demo: PropTypes.bool.isRequired,
};
