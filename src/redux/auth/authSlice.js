import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

// Reducer for register.fulfilled and logIn.fulfilled
authSlice.reducer = authSlice.reducer
  .addCase(register.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  })
  .addCase(logIn.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  });

// Reducer for logOut.fulfilled
authSlice.reducer = authSlice.reducer
  .addCase(logOut.fulfilled, (state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  });

// Reducer for refreshUser.pending
authSlice.reducer = authSlice.reducer
  .addCase(refreshUser.pending, (state) => {
    state.isRefreshing = true;
  });

// Reducer for refreshUser.fulfilled
authSlice.reducer = authSlice.reducer
  .addCase(refreshUser.fulfilled, (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  });

// Reducer for refreshUser.rejected
authSlice.reducer = authSlice.reducer
  .addCase(refreshUser.rejected, (state) => {
    state.isRefreshing = false;
  });

export const authReducer = authSlice.reducer;