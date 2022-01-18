import { combineReducers } from 'redux';

import finder from './number-finder/index.js';

export default combineReducers({ ...finder, });
