import { configureStore } from '@reduxjs/toolkit';
import announcementsReducer from './Slices/announcementsSlice';
import quizesReducer from './Slices/quizesSlice'; 

const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
    quizes: quizesReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;