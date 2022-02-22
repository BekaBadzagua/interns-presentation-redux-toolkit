import { createSlice } from '@reduxjs/toolkit';
import generateId from '../utils/IdGenerator';

const initialState = {
  list: [
    {
      id: 1,
      name: 'მელოტი კუ',
      phone: '599 99 99 99',
      onBoard: false,
    },
    {
      id: 2,
      name: 'გრძელი ცხვარი',
      phone: '599 99 99 91',
      onBoard: false,
    },
    {
      id: 3,
      name: 'ინტელიგენტი ბატი',
      phone: '599 99 99 96',
      onBoard: false,
    },
    {
      id: 4,
      name: 'სამკუდა სკუნსი',
      phone: '599 99 99 90',
      onBoard: false,
    },
    {
      id: 5,
      name: 'ეჭვიანი მაჩვზღარბა',
      phone: '599 99 99 91',
      onBoard: false,
    },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      action.payload.id = generateId(state.list);
      action.payload.onBoard = false;

      state.list.push(action.payload);
    },
    editContact: (state, action) => {
      state.list
        .filter((contact) => contact.id !== action.payload.id)
        .push(action.payload);
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContactOnBoard: (state, action) => {
      const index = state.list.findIndex(
        (contact) => contact.id === action.payload
      );
      state.list[index].onBoard = true;
    },
    removeContactFromBoard: (state, action) => {
      const index = state.list.findIndex(
        (contact) => contact.id === action.payload
      );
      state.list[index].onBoard = false;
    },
  },
});

export const {
  addContact,
  editContact,
  deleteContact,
  addContactOnBoard,
  removeContactFromBoard,
} = contactsSlice.actions;

export default contactsSlice.reducer;
