import { SUBMIT_IS_LOADING } from '../utils/constants';

import { requestGetStatus, requestCreateShortenLink } from '../services/linkService';

export function submitIsLoading(bool) {
  return {
    type: SUBMIT_IS_LOADING,
    isLoading: bool,
  };
}

const createUrlSuccess = (shortCode) => {
  requestGetStatus(shortCode)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(`err: ${err}`));
};

export function createShortenUrl(url) {
  return (dispatch) => {
    dispatch(submitIsLoading(true));
    requestCreateShortenLink(url)
      .then(function(response) {
        dispatch(submitIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(json => createUrlSuccess(json.shortcode))
      .catch(() => submitIsLoading(false));
  };
}
