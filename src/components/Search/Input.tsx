import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles/styles' was resolved to '/hom... Remove this comment to see the full error message
import { shadowAround } from '../../styles/styles';
import { useTheme } from '@emotion/react';
import { Search, Trash } from 'react-feather';
// @ts-expect-error ts-migrate(2613) FIXME: Module '"/home/fro/code/template/src/utils/useDebo... Remove this comment to see the full error message
import useDebounce from '../../utils/useDebounce';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import config from 'config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/home/fro/code/... Remove this comment to see the full error message
import { marginLeftRight } from './styles';
import { onMobile } from '../../styles/responsive';

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
  svg{
    width: 1.2em;
  }
  &:hover {
    svg {
      stroke: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
    }
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  transition: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'transitions' does not exist on type 'The... Remove this comment to see the full error message
transitions.hover};
  border-radius: 1px;
  padding-left: 10px;
  background-color: transparent;
  width: calc(100% - 26px);
  border-width: 0 !important;
  &,
  ::placeholder {
    color: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.gray};
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
    transition: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'transitions' does not exist on type 'The... Remove this comment to see the full error message
transitions.hover};
  }
  &:focus, &:visited, &:hover, &:focus-within  {
    outline: none;
    background-color: transparent;
    input, input::placeholder{
      color: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.grayDark};
    }
    svg {
      stroke: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.grayDark};
    }
  }
  
  svg {
    stroke: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.grayLight};
  }
`;

const SidebarSearchInputWrapper = styled.div`
position: sticky;
top: 0;
background: ${(props) => props.theme.
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.background};
width: 100%;
padding: 0 24px;
`;

export const SidebarSearchInput = ({
  search,
  inputRef,
  showClean,
  ...props
}: any) => (
  
  <SidebarSearchInputWrapper>
    
    <SearchInput search={search} inputRef={inputRef} showClean={showClean} {...props} />
  </SidebarSearchInputWrapper>
);

export const SearchInput = ({
  search,
  inputRef,
  showClean,
  style,
  ...props
}: any) => {
  const theme = useTheme();
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
    
    <Form css={shadowAround(theme)} onSubmit={preventSubmit} style={style} >
      
      <SearchIcon />
      
      <Input
        ref={inputRef}
        className={'searchInput '}
        type="text"
        placeholder={config.features.search.placeholder}
        aria-label="Search"
        onChange={(e) => {
          const value = e.target.value;
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
