import 'whatwg-fetch';
import { BASE_URL } from '../utils/constants';

const POST_URL = `${BASE_URL}/shorten`;

const requestCreateShortenLink = (url) => {
  return fetch(POST_URL, {
    method: 'POST',
    body: JSON.stringify({
      url,
    }),
  });
};

const requestGetStatus = (shortenUrl) => {
  const GET_STATUS_URL = `${BASE_URL}/${shortenUrl}/stats`;

  return fetch(GET_STATUS_URL, {
    method: 'GET',
  });
};

export  {
  requestCreateShortenLink,
  requestGetStatus
};
