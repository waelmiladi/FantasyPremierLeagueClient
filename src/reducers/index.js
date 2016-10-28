import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import league from './league';
import team from './team';

module.exports = combineReducers({
  league,
  team,
  routing: routerReducer,
});
