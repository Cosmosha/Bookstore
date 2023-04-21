import { createSlice } from '@reduxjs/toolkit';
import booksList from '../../booksList';

const initialState = {
  book: booksList,
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      };
      state.book.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const newState = { ...state };
      newState.book = newState.book.filter((book) => book.item_id !== bookId);
      return newState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
