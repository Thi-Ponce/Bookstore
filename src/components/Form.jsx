const Form = () => (<div className="form-container">
    <h2>Add a new book</h2>
    <form>
    <label for="name" id="book-title"></label>
    <input type="text" name="name" placeholder="Book title" />
    <label for="author" id="book-author"></label>
    <input type="text" name="author" placeholder="Author" />
    <select className="selection">
      <option>Category</option>
    </select>
    <button className="add-btn" type="submit">
        Add
    </button>
    </form>
</div>
);

export default Form;