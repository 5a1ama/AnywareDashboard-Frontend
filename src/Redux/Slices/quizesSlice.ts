import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "http://localhost:8000";

export const listQuizesAPI = createAsyncThunk('quizes/listQuizesAPI', async () => {
  const response = await axios.get(`${api}/listQuizes`);
  return response.data;
});

interface QuizesState {
  data: any[];
}

const initialState: QuizesState = {
  data: [],
};

const quizesSlice = createSlice({
  name: 'quizes',
  initialState  ,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listQuizesAPI.pending, () => {
        console.log("Quizes Pending...");
      })
      .addCase(listQuizesAPI.fulfilled, (state, action: any) => {
        state.data = action.payload;
        console.log("Quizes Retrieved");
      })
  },
});

export default quizesSlice.reducer;