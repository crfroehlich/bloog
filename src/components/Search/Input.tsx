import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Search, Trash } from 'react-feather';
import config from '../../../.config';
import { onMobile } from '../../styles/responsive';
import { shadowAround } from '../../styles/styles';
import { getTheme } from '../../theme';
import { useDebounce } from '../../utils/useDebounce';

const { colors, transitions } = getTheme();

const SearchIcon = styled(Search)`
  width: 1.2em;
  pointer-events: none;
  margin: 0 10px;
`;

const CleanSearch = styled(({ ...props }) => (
  <div {...props} role={'button'} aria-label="clean search">
    <Trash />
  </div>
))`
  cursor: pointer;
  margin: 0 10px;
  svg {
    width: 1.2em;
  }
  &:hover {
    svg {
      stroke: ${colors.primary};
    }
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  transition: ${transitions.hover};
  border-radius: 1px;
  padding-left: 10px;
  background-color: transparent;
  width: calc(100% - 26px);
  border-width: 0 !important;
  &,
  ::placeholder {
    color: ${colors.gray};
  }
`;

const Form = styled.form`
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  ${onMobile} {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  padding: 12px 4px;
  border-radius: 4px;
  background-color: rgba(223,225,235, .4);
  border: 1px solid rgba(223,225,235, 1)
  &, *, input::placeholder, svg {
    transition: ${transitions.hover};
  }

  svg {
    stroke: ${colors.grayLight};
  }
`;

const SidebarSearchInputWrapper = styled.div`
  position: sticky;
  top: 0;
  background: ${colors?.background};
  width: 100%;
  padding: 0 24px;
`;

export const SidebarSearchInput = ({ search, inputRef, showClean, ...props }: any) => (
  <SidebarSearchInputWrapper>
    <SearchInput search={search} inputRef={inputRef} showClean={showClean} {...props} />
  </SidebarSearchInputWrapper>
);

export const SearchInput = ({ search, inputRef, showClean, style, ...props }: any) => {
  const preventSubmit = (e: any) => {
    e.preventDefault();
  };
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, config.features.search.debounceTime);

  useEffect(() => {
    if (search && debouncedSearchTerm !== null) {
      search(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const clean = (e: any) => {
    e.preventDefault();
    setSearchTerm('');
    inputRef.current.value = '';
  };

  return (
    <Form css={shadowAround()} onSubmit={preventSubmit} style={style}>
      <SearchIcon />
      <Input
        ref={inputRef}
        className={'searchInput '}
        type="text"
        placeholder={config.features.search.placeholder}
        aria-label="Search"
        onChange={(e) => {
          const { value } = e.target;
          if (value && value.length > 0) {
            setSearchTerm(value);
          }
        }}
        {...props}
      />
      {showClean ? <CleanSearch onClick={clean} /> : ''}
    </Form>
  );
};
