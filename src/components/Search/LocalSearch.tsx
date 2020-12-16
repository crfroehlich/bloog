import React, { useState } from 'react';
import { HitsWrapper } from './Hits';
import { getConf } from '../../utils';
import { SearchInput } from './SearchInput';
import { PageHit } from './PageHit';
import { SearchStatus } from './SearchStatus';
import { SearchPagination } from './SearchPagination';
import { Stats } from './Stats';
import { useFlexSearch } from 'react-use-flexsearch';
import { graphql, useStaticQuery } from 'gatsby';

const config = getConf();
const Results = ({ q }: any) => <SearchStatus noHits={true} searching={false} query={q} />;

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

export const LocalSearch = (props) => {
  const { localSearchBoogi: { index, store } } = useStaticQuery(
    graphql`
    query {
      localSearchBoogi {
        index
        store
      }
    }
    `,
  );

  const { inputRef } = props;
  const [query, setQuery] = useState([]);
  const [focus, setFocus] = useState(false);
  const [page, setPage] = useState(1);
  const switchPage = (page: any) => {
    setPage(page);
  };

  const searchResult = search(query, index, store, page);
  const showResults = query?.length > 1 && focus;
  
  return (
    <div>
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
      ) : <div />}
    </div>
  );
}

export default LocalSearch;