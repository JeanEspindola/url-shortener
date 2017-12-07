import { GET_LINK_LIST } from '../utils/constants';
import { requestCreateShortenLink } from '../services/linkService';
import { requestGetStatus } from '../services/linkService';

const getLinkList = linkList => ({
  type: GET_LINK_LIST,
  linkList,
});

const createUrlSuccess = (shortCode) => {
  requestGetStatus(shortCode)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
    })
    .catch(function(err) {
      console.log(`err: ${err}`);
    });
};

const createError = (err) => {
  console.log(`parsing error: ${err}`);
};

const createShortenUrl = (url) => {
  return (dispatch) => {
    requestCreateShortenLink(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        createUrlSuccess(json.shortcode);
      })
      .catch(function(err) {
        createError(err)
      });
  };
};

export default createShortenUrl;
