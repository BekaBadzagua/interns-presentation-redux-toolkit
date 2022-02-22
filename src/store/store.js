import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';

export default configureStore({
  reducer: { contacts: contactsReducer },
});
