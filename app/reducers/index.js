import { combineReducers } from 'redux';
import { listItems, listIsLoading } from './linkListReducer';

export default combineReducers({
  listItems,
  listIsLoading,
});
