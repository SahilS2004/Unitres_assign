import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import menuReducer from './menuSlice';
import pageConfigReducer from './pageConfigSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    pageConfig: pageConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

