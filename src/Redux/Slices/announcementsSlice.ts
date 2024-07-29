import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "http://localhost:8000";

export const listAnnouncementsAPI = createAsyncThunk('announcements/listAnnouncementsAPI', async () => {
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
      .addCase(listAnnouncementsAPI.pending, () => {
        console.log("Announcements Pending...");
      })
      .addCase(listAnnouncementsAPI.fulfilled, (state, action: any) => {
        state.data = action.payload;
        console.log("Announcements Retrieved")
      })
  },
});

export default announcementsSlice.reducer;