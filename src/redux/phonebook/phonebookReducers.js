import { Type } from './phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACT: {
      const newContacts = [...state.contacts, payload.contact];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return { ...state, contacts: newContacts };
    }

    case Type.DELETE_CONTACT: {
      const newContacts = state.contacts.filter(
        contact => contact.id !== payload.id,
      );
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return { ...state, contacts: newContacts };
    }

    case Type.FILTER_CONTACT:
      return { contacts: state.contacts, filter: payload.value };

    case Type.GET_CONTACT_FROM_LS:
      return { ...state, contacts: payload.contacts };

    default:
      return state;
  }
};

export default phonebookReducer;
