import React, { useState } from 'react';
import { calculateNavigation } from '..';
import { ContentTreeGroup } from './ContentTreeGroup';

export const ContentTree = ({ edges, location }: any) => {
  const [treeData] = useState(() => calculateNavigation(edges));
  const [collapsed, setCollapsed] = useState({});

  return (
    <div>
      {treeData.children.map((group: any, i: any) => {
        const key = group.path ? group.path : Math.random().toString(36).substring(2);
        return (
          <ContentTreeGroup
            treeState={{ collapsed, setCollapsed }}
            key={`${key}_${i}`}
            location={location}
            {...group}
          />
        );
      })}
    </div>
  );
};

export default ContentTree;
