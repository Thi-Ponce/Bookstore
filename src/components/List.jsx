import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books, shallowEqual);

  return books.map((book) => (
    <Book
      genre={book.genre}
      title={book.title}
      author={book.author}
      key={book.title}
    />
  ));
};

export default BookList;
