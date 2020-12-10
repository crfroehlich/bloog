import React, { useState } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Hits' was resolved to '/mnt/k/code/scra... Remove this comment to see the full error message
import { HitsWrapper } from '../Hits';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import config from 'config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './input' was resolved to '/mnt/k/code/scra... Remove this comment to see the full error message
import Input from './input';
// @ts-expect-error ts-migrate(6142) FIXME: Module './hitComps' was resolved to '/mnt/k/code/s... Remove this comment to see the full error message
import { PageHit } from './hitComps';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Status' was resolved to '/mnt/k/code/sc... Remove this comment to see the full error message
import SearchStatus from '../Status';
// @ts-expect-error ts-migrate(6142) FIXME: Module './pagination' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import Pagination from './pagination';
// @ts-expect-error ts-migrate(6142) FIXME: Module './stats' was resolved to '/mnt/k/code/scra... Remove this comment to see the full error message
import Stats from './stats';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useFlexSearch } from 'react-use-flexsearch';
import { StaticQuery, graphql } from 'gatsby';

const Results = ({
  q
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

const LocalSearch = ({
  inputRef
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Input
          refine={(value: any) => setQuery(value)}
          inputRef={inputRef}
          onFocus={() => setFocus(true)}
          {...{ focus }}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div style={{ flex: '1' }}>
          {showResults && config.features.search.showStats ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Stats
              nbHits={searchResult.nbHits}
              processingTimeMS={searchResult.processingTimeMS}
            />
          ) : null}
          {showResults && searchResult && searchResult.hits.length === 0 ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Results q={query} />
          ) : null}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <HitsWrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ul>
              {searchResult.hits.map((hit: any,i: any) => (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Pagination
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

export default LocalSearch;
