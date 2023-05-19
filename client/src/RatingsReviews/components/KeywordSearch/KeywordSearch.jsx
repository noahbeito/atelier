import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Icons from '../../../components/Icons';
import Input from '../../../components/ui/Input';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;

  .icon {
    color: ${(props) => props.theme.secondaryColor};
  }
  .search {
    width: 80%;
  }
`;

export default function KeywordSearch({ ...props }) {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.ratingsReviews.sort);
  const [keywordVal, setKeywordVal] = useState('');

  const updateKeyword = (e) => {
    setKeywordVal(e.target.value);
    if (e.target.value.length >= 3) {
      // console.log('dispatching')
      dispatch({ type: '@reviews/sort/UPDATE', payload: { ...sort, keyword: (e.target.value).toLowerCase() } });
    }
  };

  return (
    <StyledSearch {...props}>
      <Input
        className="search"
        data-testid="search"
        value={keywordVal}
        onChange={updateKeyword}
        placeholder="Search reviews..."
      />
      <Icons.Search className="icon" size="lg" />
    </StyledSearch>
  );
}
