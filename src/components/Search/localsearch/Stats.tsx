import React from 'react';
import { SearchStats } from '..';
export const Stats = ({ nbHits, ...rest }) => <SearchStats hits={nbHits} {...rest} />;
