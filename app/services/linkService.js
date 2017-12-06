import 'whatwg-fetch';
import { BASE_URL } from '../utils/constants';

const POST_URL = `${BASE_URL}/shorten`;

const requestCreateShortenLink = (url) => {
  fetch(POST_URL, {
    method: 'POST',
    body: JSON.stringify({
      url,
    }),
  });
};

export default requestCreateShortenLink;
