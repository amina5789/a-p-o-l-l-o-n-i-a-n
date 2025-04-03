import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000/orders";

const loadUserData = () => {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : {};
};

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(BASE_URL, orderData);
      dispatch(saveOrderData(response.data)); // 👈 Сохраняем заказ в Redux
      return response.data;
    } catch (error) {
      console.error("Ошибка при оформлении заказа:", error);
      return rejectWithValue(error.response?.data || "Ошибка сервера");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [], 
    userData: loadUserData(), 
    orderDetails: null, // 👈 Добавил для хранения последнего заказа
    status: "idle",
    error: null,
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    saveOrderData: (state, action) => {  // 👈 Добавил новый редьюсер
      state.orderDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
        state.orderDetails = action.payload; // 👈 Сохраняем заказ в Redux
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { saveUserData, saveOrderData } = orderSlice.actions; // 👈 Экспортируем новый редьюсер
export default orderSlice.reducer;
