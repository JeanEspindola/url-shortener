import { SUBMIT_IS_LOADING, SUBMIT_REQUEST_SUCCESS } from '../utils/constants';

export function submitIsLoading(state = false, action) {
  switch (action.type) {
    case SUBMIT_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}
