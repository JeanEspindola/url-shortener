import { SUBMIT_IS_LOADING } from '../utils/constants';
import { requestCreateShortenLink } from '../services/linkService';
import { saveLinkInStorage } from '../utils/sessionStorage';
import { listFetchData } from '../actions/linkListActions';

export function submitIsLoading(bool) {
  return {
    type: SUBMIT_IS_LOADING,
    isLoading: bool,
  };
}

export function createShortenUrl(url) {
  return (dispatch) => {
    dispatch(submitIsLoading(true));

    requestCreateShortenLink(url)
      .then(response => response.json())
      .then(json => saveLinkInStorage(url, json.shortcode))
      .then(() => { dispatch(submitIsLoading(false)); })
      .then(() => { dispatch(listFetchData()); })
      .catch(() => { dispatch(submitIsLoading(false)); });
  };
}
