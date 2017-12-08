import { LIST_IS_LOADING, LIST_FETCH_DATA_SUCCESS } from '../utils/constants';

export function listIsLoading(state = false, action) {
  switch (action.type) {
    case LIST_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function listItems(state = [], action) {
  switch (action.type) {
    case LIST_FETCH_DATA_SUCCESS:
      return action.items;

    default:
      return state;
  }
}