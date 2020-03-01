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
    localStorage.setItem(
      'contacts',
      JSON.stringify([...state.contacts, payload]),
    );
    return { ...state, contacts: [...state.contacts, payload] };
  },
  [deleteContact]: (state, { payload }) => {
    localStorage.setItem(
      'contacts',
      JSON.stringify(state.contacts.filter(contact => contact.id !== payload)),
    );
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== payload),
    };
  },
  [filterContact]: (state, { payload }) => ({
    contacts: state.contacts,
    filter: payload,
  }),
  [getContactFromLS]: (state, { payload }) => ({ ...state, contacts: payload }),
});

export default phonebookReducer;
