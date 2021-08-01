import React, { FunctionComponent, useState } from 'react';
// Router
import { useDispatch } from 'react-redux';
// Assets
import SearchInputIcon from '../../../assets/icons/search-input.svg';
// i18n
import t from '../../../i18n';
// Redux
import { ADD_SEARCH_QUERY } from '../../../redux/actions/action-types';
// Styles
import { StyledFavorite, StyledInput } from './search-input.style';

interface IProps {}

const SearchInput: FunctionComponent<IProps> = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const dispatch = useDispatch();

  const handleClickSearchIcon = () => {
    if (searchInputValue !== '') {
      dispatch({ type: ADD_SEARCH_QUERY, payload: searchInputValue.trimEnd() });
    }
  };
  return (
    <>
      <StyledInput
        placeholder={t('searchPictures')}
        value={searchInputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInputValue(event.target.value.trimStart())
        }
      />
      <StyledFavorite>
        <img
          src={SearchInputIcon}
          alt='search'
          onClick={handleClickSearchIcon}
        />
      </StyledFavorite>
    </>
  );
};

export default SearchInput;
