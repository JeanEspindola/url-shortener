import { GET_LINK_LIST } from '../utils/constants';
import { requestCreateShortenLink } from '../services/linkService';

const getLinkList = (linkList) => ({
  type: GET_LINK_LIST,
  linkList
});

const createShortenUrl = (url) => {
  return (dispatch) => {

    requestCreateShortenLink(url)
      .then()
      .catch();
  }
};

export {
  createShortenUrl,
}
