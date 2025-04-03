import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJewelry = createAsyncThunk(
    "jewelry/fetchJewelry",
    async (_, { getState }) => { 
        const { currentPage, itemsPerPage } = getState().jewelry;
        const query = getState().search.query; 

        const response = await axios.get("http://localhost:5000/jewelry", {
            params: { 
                _page: currentPage, 
                _limit: itemsPerPage, 
                title_like: query 
            }
        });

        const totalItems = parseInt(response.headers["x-total-count"], 10) || 0;
        console.log("Текущая страница:", currentPage, "Поисковый запрос:", query);

        return { data: response.data, totalItems };
    }
);


const jewelrySlice = createSlice({
    name: "jewelry",
    initialState: {
        items: [],
        currentPage: 1,
        itemsPerPage:12,
        totalItems: 4,
        status: "idle",
        error: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJewelry.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchJewelry.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload.data;
                state.totalItems = action.payload.totalItems;
            })
            .addCase(fetchJewelry.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const changePage = (newPage) => (dispatch, getState) => {
    const { totalItems, itemsPerPage, currentPage } = getState().jewelry;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;

    dispatch(setPage(newPage));
    dispatch(fetchJewelry()); 
};

export const { setPage } = jewelrySlice.actions;
export default jewelrySlice.reducer;
