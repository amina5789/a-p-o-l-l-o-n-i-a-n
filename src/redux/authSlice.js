import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser } from "./userSlice";

const BASE_URL = "http://localhost:5000";

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      const foundUser = await data.find(

        (item) =>
          item.email === userData.email && item.password === userData.password

      );
console.log(foundUser);
      if (!foundUser) {
        throw new Error("Неверный email или пароль");
      }

      
      return foundUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user"); 
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: '',
    status: "idle",
    error: null,
  },
  reducers: {
  setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
