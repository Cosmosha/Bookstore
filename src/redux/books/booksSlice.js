import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = JSON.parse(JSON.stringify(state));
      newBook.books[action.payload.id] = [
        {
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
      return newBook;
    },
    removeBook: (state, action) => {
      const bookId = action.payload.id;
      const bookList = JSON.parse(JSON.stringify(state));
      delete bookList[bookId];
      return bookList;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
