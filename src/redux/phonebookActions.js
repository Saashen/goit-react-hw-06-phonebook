export const Type = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  FILTER_CONTACT: 'FILTER_CONTACT',
};

export const addContact = contact => ({
  type: Type.ADD_CONTACT,
  payload: { contact },
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: { id },
});

// export const filterContact = id => ({
//   type: Type.DELETE_CONTACT,
//   payload: { id },
// });
