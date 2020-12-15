import React, { useState } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Hits' was resolved to '/home/fro/code/t... Remove this comment to see the full error message
import { HitsWrapper } from '../Hits';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config } from 'config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SearchInput' was resolved to '/home/fro/... Remove this comment to see the full error message
import { SearchInput } from './SearchInput';
// @ts-expect-error ts-migrate(6142) FIXME: Module './PageHit' was resolved to '/home/fro/code... Remove this comment to see the full error message
import { PageHit } from './PageHit';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../SearchStatus' was resolved to '/home/fr... Remove this comment to see the full error message
import SearchStatus from '../SearchStatus';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SearchPagination' was resolved to '/home... Remove this comment to see the full error message
import { SearchPagination } from './SearchPagination';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Stats' was resolved to '/home/fro/code/t... Remove this comment to see the full error message
import { Stats } from './Stats';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useFlexSearch } from 'react-use-flexsearch';
import { StaticQuery, graphql } from 'gatsby';

const Results = ({
  q

}: any) => <SearchStatus noHits={true} searching={false} query={q} />;

const getPerformance = () => {
  if (typeof window !== `undefined` && window.performance) {
    return window.performance;
  }
  return {
    now: () => new Date().getMilliseconds()
  }
}

const calculatePage = (results: any, page: any) => {
  const hitsPerPage = config.features.search.hitsPerPage;
  const startIdx = hitsPerPage * page - hitsPerPage;
  const endIdx = startIdx + hitsPerPage;
  return results.slice(startIdx, endIdx);
};

const search = (query: any, index: any, store: any, page: any) => {
  const performance = getPerformance();
  const t1 = performance.now();
  const results = useFlexSearch(query, index, store);
  const maxResults =
    config.features.search.pagination.totalPages * config.features.search.hitsPerPage;
  const nbHits = results.length > maxResults ? maxResults : results.length;

  const pages = Math.ceil(results.length / config.features.search.hitsPerPage);
  const pageHits = calculatePage(results, page);
  const t2 = performance.now();
  const processingTimeMS = (t2 - t1).toFixed(2);
  return {
    hits: pageHits,
    nbHits: nbHits,
    pages: pages,
    processingTimeMS: processingTimeMS,
  };
};

export const LocalSearch = ({
  inputRef
}: any) => (
  
  <StaticQuery
    query={graphql`
      query {
        localSearchBoogi {
          index
          store
        }
      }
    `}
    render={({ localSearchBoogi: { index, store } }) => {
      const [query, setQuery] = useState(null);
      const [focus, setFocus] = useState(false);
      const [page, setPage] = useState(1);
      const switchPage = (page: any) => {
        setPage(page);
      };

      const searchResult = search(query, index, store, page);
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      const showResults = query && query.length > 1 && focus;
      
      return <>
        
        <SearchInput
          refine={(value: any) => setQuery(value)}
          inputRef={inputRef}
          onFocus={() => setFocus(true)}
          {...{ focus }}
        />
        
        <div style={{ flex: '1' }}>
          {showResults && config.features.search.showStats ? (
            
            <Stats
              nbHits={searchResult.nbHits}
              processingTimeMS={searchResult.processingTimeMS}
            />
          ) : null}
          {showResults && searchResult && searchResult.hits.length === 0 ? (
            
            <Results q={query} />
          ) : null}
          
          <HitsWrapper>
            
            <ul>
              {searchResult.hits.map((hit: any,i: any) => (
                
                <PageHit
                  key={`${hit.slug}_${i}`}
                  hit={hit}
                  q={query}
                  maxWords={config.features.search.snippetLength}
                />
              ))}
            </ul>
          </HitsWrapper>
        </div>
        {showResults &&
        searchResult.hits.length > 0 &&
        config.features.search.pagination.enabled ? (
          
          <SearchPagination
            totalPages={config.features.search.pagination.totalPages}
            showPrevious={config.features.search.pagination.showPrevious}
            showNext={config.features.search.pagination.showNext}
            refine={switchPage}
            nbPages={searchResult.pages}
            currentPage={page}
          />
        ) : null}
      </>;
    }}
  />
);
