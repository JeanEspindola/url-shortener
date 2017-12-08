import { LIST_IS_LOADING, LIST_FETCH_DATA_SUCCESS } from '../utils/constants';

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

export function listFetchData(url) {
  return (dispatch) => {
    dispatch(listIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(listIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(listFetchDataSuccess(items)))
      .catch();
  };
}
