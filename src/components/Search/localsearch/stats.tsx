import { SearchStats } from '..';
export default ({
  nbHits,
  ...rest

}: any) => <SearchStats hits={nbHits} {...rest} />;
