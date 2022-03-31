import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState();
  const [bookAuthor, setBookAuthor] = useState();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title: bookTitle,
      author: bookAuthor,
    }));
  };
  return (
    <div className="form-container">
      <h2>Add a new book</h2>
      <form onSubmit={submitForm}>
        <input required value={bookTitle} type="text" name="name" placeholder="Book title" onChange={(e) => setBookTitle(e.target.value)} />
        <input required value={bookAuthor} type="text" name="author" placeholder="Author" onChange={(e) => setBookAuthor(e.target.value)} />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
