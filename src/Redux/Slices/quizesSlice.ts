import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "http://localhost:8000";

export const fetchQuizes = createAsyncThunk('quizes/fetchQuizes', async () => {
  const response = await axios.get(`${api}/listQuizes`);
  return response.data;
});

interface QuizesState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuizesState = {
  data: [],
  status: 'idle',
  error: null,
};

const quizesSlice = createSlice({
  name: 'quizes',
  initialState  ,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuizes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchQuizes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default quizesSlice.reducer;