import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
    "product/fetchProductById",
    async (id, { rejectWithValue }) => {
        try {
            let response = await fetch(`http://localhost:5000/jewelry/${id}`);
            
            if (!response.ok) {
                response = await fetch(`http://localhost:5000/gift/${id}`);
                if (!response.ok) throw new Error("Ошибка загрузки товара");
            }
            
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        item: null,
        cart: [],  
        status: "idle",
        error: null,
    },
    reducers: { 
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(item => item.id === action.payload.id);
            
            if (existingProduct) {
               existingProduct.quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.item = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { addToCart } = productSlice.actions; 
export default productSlice.reducer; 
