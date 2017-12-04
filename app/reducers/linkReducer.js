import { GET_LINK_LIST } from '../utils/constants';

export function getLinkList(state = [], action) {
  switch (action.type) {
    case GET_LINK_LIST:
      return action.linkList;

    default:
      return state;
  }
}