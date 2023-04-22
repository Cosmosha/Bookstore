/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Book from './Book';
import AddBook from './AddBook';
import { getBooks, deleteBook } from '../redux/books/booksSlice';

const BooksContainer = () => {
  // const dispatch = useDispatch();
  const { book, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        {' '}
        <h2> Loading... </h2>
        {' '}
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {' '}
        <h3> something went wrong wrong... </h3>
        {' '}
      </div>
    );
  }

  if (book.length === 0) {
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
  const handleBook = async () => {
    await dispatch(getBooks());
  };
  const handleDelete = async (item_id) => {
    dispatch(deleteBook(item_id));
  };

  return (
    <>
      <section>
        <div className="book-list">
          <ul>
            {' '}
            {Object.keys(book).length > 0 ? (
              Object.keys(book).map((item) => (
                <li key={item}>
                  {' '}
                  {book[item][0].item_id}
                  {' '}
                  <div className="bookitemContainer">
                    <div className="bookitem">
                      <h3>
                        {' '}
                        {book[item][0].title}
                        {' '}
                      </h3>
                      {' '}
                      <p>
                        {' '}
                        {book[item][0].author}
                        {' '}
                      </p>
                      {' '}
                    </div>
                    {' '}
                    <button
                      type="button"
                      className="removeBook"
                      onClick={() => {
                        handleDelete(item);
                        handleBook();
                      }}
                    >
                      {' '}
                      remove
                      {' '}
                    </button>
                    {' '}
                  </div>
                  {' '}
                </li>
              ))
            ) : (
              <p className="no-book"> No books were added </p>
            )}
            {' '}
          </ul>
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
