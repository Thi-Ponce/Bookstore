const CHECKSTATUS = 'bookStore/books/CHECK_STATUS';

export default function statusReducer(state = {}, action) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({ type: CHECKSTATUS });
