import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import booksList from '../../booksList';

const app_id = 'FUmEw9612WnSTelBC867';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app_id}/books`;

const initialState = {
  book: [],
  isLoading: true,
  error: null,
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (data, thunk) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunk.rejectWithValue('something went wrong...');
    }
  },
);

export const postBooks = createAsyncThunk(
  'books/postBooks',
  async (data, thunk) => {
    try {
      const resp = await axios.post(url, data);
      return resp.data;
    } catch (error) {
      return thunk.rejectWithValue('something went wrong...');
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBooks',
  async (item_id) => {
    try {
      const getBook = `${url}/${item_id}`;
      await axios.delete(getBook);
      return item_id;
    } catch (error) {
      return error.message;
    }
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
