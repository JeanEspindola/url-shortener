import { LIST_IS_LOADING, LIST_FETCH_DATA_SUCCESS } from '../utils/constants';
import { loadStoredLinks } from '../utils/sessionStorage';

export function listIsLoading(bool) {
  return {
    type: LIST_IS_LOADING,
    isLoading: bool,
  };
}

export function listFetchDataSuccess(items) {
  return {
    type: LIST_FETCH_DATA_SUCCESS,
    items,
  };
}

export function listFetchData() {
  return (dispatch) => {
    dispatch(listIsLoading(true));

    const listItems = loadStoredLinks();

    dispatch(listIsLoading(false));
    dispatch(listFetchDataSuccess(listItems));
  };
}
