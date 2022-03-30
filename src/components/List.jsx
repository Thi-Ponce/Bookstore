import Book from './Book';

const List = () => {
  const books = [
    {
      id: 1, title: 'Crime and Punishment', author: 'Fyodor Dostoevski', genre: 'Philosophical novel',
    },
  ];
  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default List;
