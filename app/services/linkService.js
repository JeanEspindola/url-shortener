import 'whatwg-fetch';
import { BASE_URL } from '../utils/constants';

const POST_URL = `${BASE_URL}/shorten`;

const requestCreateShortenLink = (url) => {
  fetch(POST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      mode: 'no-cors'
    },
    body: JSON.stringify({
      url: url
    })
  });

};

export {
  requestCreateShortenLink
};