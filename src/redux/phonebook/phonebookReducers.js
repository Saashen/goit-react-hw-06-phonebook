import { Type } from './phonebookActions';

export const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACT: {
      const newContacts = [...state, payload.contact];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return newContacts;
    }

    case Type.DELETE_CONTACT: {
      const newContacts = state.filter(contact => contact.id !== payload.id);
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return newContacts;
    }

    case Type.GET_CONTACT_FROM_LS:
      return payload.contacts;

    default:
      return state;
  }
};

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.FILTER_CONTACT:
      return payload.value;

    default:
      return state;
  }
};
