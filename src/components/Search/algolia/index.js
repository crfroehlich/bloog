import React, { createRef } from 'react';
import {
  InstantSearch,
  Index,
  Hits,
  Configure,
  connectStateResults,
} from 'react-instantsearch-dom';
import { HitsWrapper } from '../Hits';
import config from 'config';
import Input from './input';

