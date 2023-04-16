import React, { useState } from 'react';
import AddBook from './AddBook';

const BookList = () => {
  const [books, setBooks] = useState([]);
  return (
    <div>
      <h2> LIST OF BOOKS </h2>
      {' '}
      {books.map((book) => (
        <ul key={book.id}>
          <li>
            {' '}
            Book Title:
            {book.title}
          </li>
          {' '}
          <li>
            {' '}
            author:
            {book.author}
          </li>
          {' '}
        </ul>
      ))}
      {' '}
      <hr className="" />
      <AddBook books={books} setBooks={setBooks} />
      {' '}
    </div>
  );
};

export default BookList;
