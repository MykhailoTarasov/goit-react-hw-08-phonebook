import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const addFulfilledCase = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteFulfilledCase = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    (contact) => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const updateFulfilledCase = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const updatedContact = action.payload;
  state.items = state.items.map((contact) =>
    contact.id === updatedContact.id ? updatedContact : contact
  );
};

contactSlice.reducer = (state, action) => {
  switch (action.type) {
    case fetchContacts.pending.type:
    case addContact.pending.type:
    case deleteContact.pending.type:
    case updateContact.pending.type:
      handlePending(state);
      break;

    case fetchContacts.rejected.type:
    case addContact.rejected.type:
    case deleteContact.rejected.type:
    case updateContact.rejected.type:
      handleRejected(state, action);
      break;

    case fetchContacts.fulfilled.type:
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      break;

    case addContact.fulfilled.type:
      addFulfilledCase(state, action);
      break;

    case deleteContact.fulfilled.type:
      deleteFulfilledCase(state, action);
      break;

    case updateContact.fulfilled.type:
      updateFulfilledCase(state, action);
      break;

    default:
      break;
  }
};

export const contactsReducer = contactSlice.reducer;