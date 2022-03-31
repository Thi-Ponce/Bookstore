const ADDBOOK = 'bookStore/books/ADD_BOOK';
const REMOVEBOOK = 'bookStore/books/REMOVE_BOOK';

const beginState = [
  {
    id: 1, title: 'Crime and Punishment', author: 'Fyodor Dostoevski', genre: 'Philosophical novel',
  },
  {
    id: 2, title: 'The Masque of the Red Death', author: 'Edgar Allan Poe', genre: 'Gothic fiction',
  },
  {
    id: 3, title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling', genre: 'Fantasy',
  },
];

export const addBook = (payload) => ({
  type: 'ADDBOOK',
  payload,
});

export const removeBook = (payload) => ({
  type: 'REMOVEBOOK',
  payload,
});

const reducer = (state = beginState, action) => {
  switch (action.type) {
    case ADDBOOK:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
