import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import metaData from '../../testData/metaData.json';

const StyledSortedOptions = styled.div`
  font-size: 150%;
  position: relative;
  display: inline-block;
`;

const StyledDropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  & div {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  &:hover .dropdown-content {
    display: block;
  }
`;

export default function SortOptions() {
  const ReviewsNum = useSelector((state) => state.ratingsReviews.reviews.results.length);
  const sortOptions = ['Relevance', 'Helpful', 'Newest'];

  return (
    <StyledSortedOptions>
      {`${ReviewsNum} reviews, sorted by `}
      <StyledDropdown className="dropdown">
        <div className="dropdown-content">
          {sortOptions.map((option) => (
            <div>
              {option}
            </div>
          ))}
        </div>
      </StyledDropdown>
    </StyledSortedOptions>
  );
}
