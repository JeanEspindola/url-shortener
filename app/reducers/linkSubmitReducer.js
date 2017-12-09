import { SUBMIT_IS_LOADING } from '../utils/constants';

function submitIsLoading(state = false, action) {
  switch (action.type) {
    case SUBMIT_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export default submitIsLoading;
