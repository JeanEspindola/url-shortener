import { ADD_LINK, GET_LINK_LIST } from './utils/constants';

const addLink = () => ({
  type: ADD_LINK,
});

const getLinkList = (linkList) => ({
  type: GET_LINK_LIST,
  linkList
});
