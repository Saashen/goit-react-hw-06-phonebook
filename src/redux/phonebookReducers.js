import { Type } from './phonebookActions';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const phonebookReducer = (prevState = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case Type.ADD_CONTACT:
      return { ...prevState, contacts: [...prevState, payload.contact] };

    case Type.DELETE_CONTACT:
      return {
        ...prevState,
        contacts: prevState.filter(contact => contact.id !== payload.id),
      };

    default:
      return prevState;
  }
};

export default phonebookReducer;
