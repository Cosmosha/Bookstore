/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BooksContainer = () => {
  // const dispatch = useDispatch();
  const { book } = useSelector((store) => store.books);

  if (book === null) {
    return (
      <>
        <section className="books">
          <header>
            <h2> Books Store </h2>
            {' '}
            <h4 className="empty-store"> No Books Found... </h4>
            {' '}
          </header>
          {' '}
        </section>
        {' '}
        <footer>
          <hr />
          {' '}
          <AddBook />
          {' '}
        </footer>
        {' '}
      </>
    );
  }

  return (
    <>
      <section className="books">
        <h1> BOOK STORE </h1>
        {' '}
        <div>
          {' '}
          {book.map((item) => (
            <Book key={item.item_id} {...item} />
          ))}
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      <footer>
        <hr />
        {' '}
        <AddBook />
        {' '}
      </footer>
      {' '}
    </>
  );
};

export default BooksContainer;
