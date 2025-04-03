import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Запрос на получение всех подарков
export const fetchGift = createAsyncThunk(
    "gift/fetchGift",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/gift");
            if (!response.ok) throw new Error("Ошибка загрузки подарков");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const giftSlice = createSlice({
    name: "gift",
    initialState: {
        items: [],
        status: "idle", 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGift.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGift.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchGift.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload; 
            });
    },
});

export default giftSlice.reducer;
