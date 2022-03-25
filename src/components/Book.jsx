import { PropTypes } from 'prop-types';

const Book = ({ data }) => {
  const { genre, title, author } = data;

  return (
    <li className="Book-Info">
      <div className="Item-Header">
        <p className="Genre">{genre}</p>
        <h2 className="Title">{title}</h2>
        <p className="Author">{author}</p>
        <div className="btn-container">
          <button className="btn-comment" type="button">Comments</button>
          <button className="btn-remove" type="button">Remove</button>
          <button className="btn-edit" type="button">Edit</button>
        </div>
      </div>
      <div className="progress" />
    </li>
  );
};

Book.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
