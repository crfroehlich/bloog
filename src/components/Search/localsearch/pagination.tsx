import { Pagination } from '..';
export default ({
  currentPage,
  ...rest
}: any) => (
  
  <Pagination currentPage={currentPage} {...rest} />
);
