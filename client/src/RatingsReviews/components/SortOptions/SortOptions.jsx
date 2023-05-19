import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews } from '../../actions/index';
// import metaData from '../../testData/metaData.json';

const StyledInline = styled.div`
  font-size: 150%;
  display: inline;
`;

const StyledDropdown = styled(StyledInline)`
  position: relative;
  display: inline-block;
`;

const StyledParent = styled.div`
  white-space: nowrap;
  object-fit: scale-down;
`;

const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.background};
  font-size: 100%;
  min-width: 10%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0.5em;
  z-index: 1;

  ${StyledDropdown}:hover & {
    display: block;
  }
`;

const StyledOptions = styled.div`
  margin: 0.5em;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledCurrentOptions = styled.div`
  text-decoration: underline;
  cursor: pointer;
  &::after {
    font-family: "Font Awesome 5 Free";
    content: '\uf078';
  }
`;

export default function SortOptions() {
  const ReviewsNum = useSelector((state) => state.ratingsReviews.reviews.results.length);
  const productId = useSelector((state) => state.product.data.id);

  const dispatch = useDispatch();

  const [currentOption, setCurrentOption] = useState('Relevance');
  const sortOptions = ['Relevance', 'Helpful', 'Newest'];

  const parsedOption = () => {
    if (currentOption === 'Relevance') {
      return 'relevant';
    }
    return currentOption.toLowerCase();
  };

  const handleCurrentOptionClick = (option) => {
    dispatch({ type: '@reviews/SET_SORT_OPTION', payload: parsedOption() });
    dispatch(fetchReviews(productId, parsedOption(), undefined, 100000));
    setCurrentOption(option);
  };

  const allowedOptions = sortOptions.map((option) => {
    if (option !== currentOption) {
      return (
        <StyledOptions onClick={() => { handleCurrentOptionClick(option); }}>
          {option}
        </StyledOptions>
      );
    }
    return undefined;
  });

  // useEffect(() => {
  //   dispatch({ type: '@reviews/SET_SORT_OPTION', payload: parsedOption() });
  //   dispatch(fetchReviews(productId, parsedOption(), undefined, 100000));
  // }, [currentOption]);

  return (
    <StyledParent>
      <StyledInline>
        {`${ReviewsNum} reviews, sorted by `}
      </StyledInline>
      <StyledDropdown>
        <StyledCurrentOptions>
          { currentOption }
        </StyledCurrentOptions>
        <StyledDropdownContent>
          {allowedOptions}
        </StyledDropdownContent>
      </StyledDropdown>
    </StyledParent>
  );
}
