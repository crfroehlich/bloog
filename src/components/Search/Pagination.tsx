import styled from '@emotion/styled';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { onMobile } from '../../styles/responsive';
import { getTheme } from '../../theme';
import { Empty } from '../Empty';

const { search, colors, transitions } = getTheme();

const Button = styled(({ refine, page, show, isCurrent, children, ...props }: any) => {
  const changePage = (event: any) => {
    event.preventDefault();
    refine(page);
  };
  return (
    <button href="#" onClick={changePage} {...props}>
      {children}
    </button>
  );
})`
  width: 32px;
  height: 32px;
  visibility: ${(props) => (props.show || props.show === undefined ? 'visible' : 'hidden')};
  vertical-align: middle;
  transition: ${transitions.hover};
  background-color: ${(props) =>
    props.isCurrent ? search.pagination.currend?.background : search.pagination?.background};
  border: 1px solid ${search.pagination.border};

  color: ${(props) => (props.isCurrent ? search.pagination.currend?.font : search.pagination.font)};
  border-radius: 4px;
  box-shadow: 0 0 4px 0 ${colors.border};
  font-size: 1em;
  cursor: inherit;
  &:hover {
    background-color: ${search.pagination.hover};
    color: ${search.pagination.fontHover};
  }
  svg {
    stroke: ${search.pagination.font};
    vertical-align: middle;
  }
`;

const PagesList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  align-items: center;

  padding: 12px 0;
  ${onMobile} {
    padding: 8px 0;
  }
  li {
    margin: 0 1px;
    cursor: pointer;
  }
`;

const PagesListWrapper = styled.div`
  border-top: 1px solid ${search.pagination.border};
  background: ${colors?.background};
  width: 100%;
  display: flex;
  position: sticky;
  bottom: 0;
  box-shadow: 0 -2px 4px 0 ${colors.shadow};
`;

const leftRightMargin = '12px';

export const Pagination = ({
  totalPages,
  nbPages,
  currentPage,
  refine,
  showPrevious,
  showNext,
}: any) => {
  const pagesToShow = totalPages && nbPages > totalPages ? totalPages : nbPages;
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage === pagesToShow ? currentPage : currentPage + 1;
  return (
    <PagesListWrapper>
      <PagesList>
        {showPrevious ? (
          <li style={{ marginRight: leftRightMargin }}>
            <Button show={currentPage > 1} refine={refine} page={previousPage}>
              <ChevronLeft />
            </Button>
          </li>
        ) : (
          <Empty />
        )}
        {new Array(pagesToShow).fill(null).map((_, index) => {
          const page = index + 1;
          const isCurrent = currentPage === page;
          return (
            <li key={`${index}_${Date.now()}`}>
              <Button refine={refine} page={page} isCurrent={isCurrent}>
                {page}
              </Button>
            </li>
          );
        })}
        {showNext ? (
          <li style={{ marginLeft: leftRightMargin }}>
            <Button show={currentPage !== pagesToShow} refine={refine} page={nextPage}>
              <ChevronRight />
            </Button>
          </li>
        ) : (
          <Empty />
        )}
      </PagesList>
    </PagesListWrapper>
  );
};
