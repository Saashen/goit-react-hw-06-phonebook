import { createAction } from '@reduxjs/toolkit';

const Type = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  FILTER_CONTACT: 'FILTER_CONTACT',
  GET_CONTACT_FROM_LS: 'GET_CONTACT_FROM_LS',
};

export const addContact = createAction(Type.ADD_CONTACT);
export const deleteContact = createAction(Type.DELETE_CONTACT);
export const getContactFromLS = createAction(Type.GET_CONTACT_FROM_LS);
export const filterContact = createAction(Type.FILTER_CONTACT);
