export const Type = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  FILTER_CONTACT: 'FILTER_CONTACT',
  GET_CONTACT_FROM_LS: 'GET_CONTACT_FROM_LS',
};

export const addContact = contact => ({
  type: Type.ADD_CONTACT,
  payload: { contact },
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: { id },
});
export const getContactFromLS = contacts => ({
  type: Type.GET_CONTACT_FROM_LS,
  payload: { contacts },
});

export const filterContact = value => ({
  type: Type.FILTER_CONTACT,
  payload: { value },
});
