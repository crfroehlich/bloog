import React from 'react';
import { SearchStats } from '.';

export const Stats = ({ nbHits, ...rest }: any) => <SearchStats hits={nbHits} {...rest} />;
