import Book from './Book';

const List = () => {
  const books = [
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
  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default List;
