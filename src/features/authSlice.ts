import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
