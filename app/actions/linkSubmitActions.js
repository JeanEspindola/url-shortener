import { requestGetStatus, requestCreateShortenLink } from '../services/linkService';

const createUrlSuccess = (shortCode) => {
  requestGetStatus(shortCode)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(`err: ${err}`));
};

const createError = (err) => {
  console.log(`parsing error: ${err}`);
};

const createShortenUrl = (url) => {
  return (dispatch) => {
    requestCreateShortenLink(url)
      .then(response => response.json())
      .then(json => createUrlSuccess(json.shortcode))
      .catch(err => createError(err));
  };
};

export default createShortenUrl;
