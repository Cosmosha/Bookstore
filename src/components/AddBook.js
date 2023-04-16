import React, { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

const AddBook = ({ books, setBooks }) => {
  const [getTitle, setTitle] = useState('');
  const [getAuthor, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getTitle.trim() && getAuthor.trim()) {
      const newBooks = [...books];
      newBooks.push({ id: uuid(), title: getTitle, author: getAuthor });
      setBooks(newBooks);
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please enter a book title and author.');
    }
  };

  return (
    <div className="addInput">
      <h2> ADD NEW BOOK </h2>
      {' '}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={getTitle}
          onChange={handleTitle}
        />
        {' '}
        <input
          type="text"
          placeholder="author name"
          value={getAuthor}
          onChange={handleAuthor}
        />
        {' '}
        <button type="submit"> Add Book </button>
        {' '}
        <br />
        <span className="submit-warning">
          {' '}
          {message}
          {' '}
        </span>
        {' '}
      </form>
      {' '}
    </div>
  );
};

AddBook.propTypes = {
  books: PropTypes.string.isRequired,
  setBooks: PropTypes.string.isRequired,
};

export default AddBook;
