import { SidebarSearchInput } from '..';
export default (({
  refine,
  ...rest
}: any) => (
  
  <SidebarSearchInput search={(value: any) => refine(value)} {...rest} showClean={true} />
));
