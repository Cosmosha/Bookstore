import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ item_id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="bookitemContainer">
      <div className="bookitem">
        <h3>
          {' '}
          {title}
          {' '}
        </h3>
        {' '}
        <p>
          {' '}
          {author}
          {' '}
        </p>
        {' '}
      </div>
      {' '}
      <button
        type="button"
        className="removeBook"
        onClick={() => {
          dispatch(removeBook(item_id));
        }}
      >
        {' '}
        Remove
        {' '}
      </button>
      {' '}
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
