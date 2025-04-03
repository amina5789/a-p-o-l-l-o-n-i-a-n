// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { ROUTER_PATHS } from '../routes/routesPath';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const initialState = {
  user: null, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; 
    },
    logout: (state) => {
      state.user = null; 
    },
  },
});



export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
