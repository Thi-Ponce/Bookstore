import { shallowEqual, useSelector } from 'react-redux';
import Book from './Book';

const List = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default List;
