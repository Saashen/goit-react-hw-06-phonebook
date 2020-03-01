import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContactFromLS,
  filterContact,
} from './phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    const newContacts = [...state.contacts, payload];
    localStorage.setItem(newContacts);
    return { ...state, contacts: newContacts };
  },
  [deleteContact]: (state, { payload }) => {
    const newContacts = state.contacts.filter(
      contact => contact.id !== payload,
    );
    localStorage.setItem(newContacts);
    return {
      ...state,
      contacts: newContacts,
    };
  },
  [filterContact]: (state, { payload }) => ({
    contacts: state.contacts,
    filter: payload,
  }),
  [getContactFromLS]: (state, { payload }) => ({ ...state, contacts: payload }),
});

export default phonebookReducer;
