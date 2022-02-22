import * as actionTypes from './actionTypes';

// Contact
export const initContacts = () => {
  return {
    type: actionTypes.INIT_CONTACTS,
  };
};
export const addContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT,
    payload: contact,
  };
};
export const editContact = (contact) => {
  return {
    type: actionTypes.EDIT_CONTACT,
    payload: contact,
  };
};
export const deleteContact = (id) => {
  return {
    type: actionTypes.DELETE_CONTACT,
    payload: id,
  };
};

// Board
export const addContactOnBoard = (id) => {
  return {
    type: actionTypes.ADD_CONTACT_ON_BOARD,
    payload: id,
  };
};
export const removeContactFromBoard = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT_FROM_BOARD,
    payload: id,
  };
};
