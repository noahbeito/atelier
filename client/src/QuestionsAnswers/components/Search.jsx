import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icons from '../../components/Icons';

export default function Search() {
  const searchText = useSelector((state) => state.questionsAnswers.search.text);
  const dispatch = useDispatch();
  console.log(searchText);

  const onChangeHandler = (e) => {
    console.log('CALLED');
    dispatch({ type: '@qa/search/SET_SEARCH', payload: e.target.value });
  };

  return (
    <div>
      <input
        data-testid="search"
        value={searchText}
        onChange={onChangeHandler}
        placeholder="Have a question? Search for answers..."
      />
      <Icons.Search size="lg" />
    </div>
  );
}
