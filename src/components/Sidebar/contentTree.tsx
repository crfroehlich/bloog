import React, { useState } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './contentTreeGroup' was resolved to '/mnt/... Remove this comment to see the full error message
import ContentTreeGroup from './contentTreeGroup';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'calculateNav... Remove this comment to see the full error message
import { calculateNavigation } from '..';

const ContentTree = ({
  edges,
  location
}: any) => {
  const [treeData] = useState(() => calculateNavigation(edges));
  const [collapsed, setCollapsed] = useState({});
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {treeData.children.map((group: any, i: any) => {
      const key = group.path ? group.path : Math.random().toString(36).substring(2);
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ContentTreeGroup
          treeState={{ collapsed: collapsed, setCollapsed: setCollapsed }}
          key={`${key}_${i}`}
          location={location}
          {...group}
        />
      );
    })}
  </>;
};

export default ContentTree;
