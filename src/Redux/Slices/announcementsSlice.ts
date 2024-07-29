import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "http://localhost:8000";

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
  const response = await axios.get(`${api}/listAnnouncements`);
  return response.data;
});

interface AnnouncementsState {
  data: any[];
}

const initialState: AnnouncementsState = {
  data: []
};

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState  ,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, () => {
        console.log("Announcements Pending...");
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action: any) => {
        state.data = action.payload;
        console.log("Announcements Retrieved")
      })
  },
});

export default announcementsSlice.reducer;