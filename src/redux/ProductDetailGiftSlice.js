import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGiftById = createAsyncThunk(
    "giftDetail/fetchGiftById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:5000/gift/${id}`);
            if (!response.ok) throw new Error("Ошибка загрузки подарка");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const giftDetailSlice = createSlice({
    name: "giftDetail",
    initialState: {
        item: null,
        status: "idle",
        error: null,
    },
    reducers: {},  
    extraReducers: (builder) => {
        builder
            .addCase(fetchGiftById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGiftById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.item = action.payload;
            })
            .addCase(fetchGiftById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default giftDetailSlice.reducer;
