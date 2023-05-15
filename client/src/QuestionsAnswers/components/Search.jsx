import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Icons from '../../components/Icons';
import Input from '../../components/ui/Input';

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
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

export default function Search() {
  const searchText = useSelector((state) => state.questionsAnswers.search.text);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch({ type: '@qa/search/SET_SEARCH', payload: e.target.value });
  };

  return (
    <StyledSearch>
      <Input
        className="search"
        data-testid="search"
        value={searchText}
        onChange={onChangeHandler}
        placeholder="Have a question? Search for answers..."
      />
      <Icons.Search className="icon" size="lg" />
    </StyledSearch>
  );
}
