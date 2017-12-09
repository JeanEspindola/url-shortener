import { combineReducers } from 'redux';
import { listItems, listIsLoading } from './linkListReducer';
import submitIsLoading from './linkSubmitReducer';

export default combineReducers({
  listItems,
  listIsLoading,
  submitIsLoading,
});
