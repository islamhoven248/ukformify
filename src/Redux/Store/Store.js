import { configureStore } from '@reduxjs/toolkit';

import UserReducer from '../Slice/UserSlice'


export const store = configureStore({
  reducer: {
    User:UserReducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
});

