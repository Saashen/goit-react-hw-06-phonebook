import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebookReducers';

const store = configureStore({
  reducer: phonebookReducer,
});

export default store;
