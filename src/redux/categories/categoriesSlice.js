import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catorgies: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state.status,
  },
});

export default categoriesSlice;
