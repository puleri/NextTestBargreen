import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/app';

export default configureStore({
    reducer: {
      app: appReducer,
    },
});