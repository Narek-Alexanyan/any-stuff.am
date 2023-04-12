import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
