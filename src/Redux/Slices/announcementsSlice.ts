import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "http://localhost:8000";

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
  const response = await axios.get(`${api}/listAnnouncements`);
  return response.data;
});

interface AnnouncementsState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AnnouncementsState = {
  data: [],
  status: 'idle',
  error: null,
};

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState  ,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default announcementsSlice.reducer;