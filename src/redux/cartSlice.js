import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/cart");
            if (!response.ok) throw new Error("Ошибка загрузки корзины");
            const data = await response.json();
            saveCartToLocalStorage(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (product, { rejectWithValue }) => {
        try {
            const existingCart = loadCartFromLocalStorage();
            const existingItem = existingCart.find((item) => item.id === product.id);

            let updatedCart;

            if (existingItem) {
                updatedCart = existingCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );

                await fetch(`http://localhost:5000/cart/${product.id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quantity: existingItem.quantity + product.quantity }),
                });
                
            } else {
                const response = await fetch("http://localhost:5000/cart", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(product),
                });
                if (!response.ok) throw new Error("Ошибка добавления в корзину");

                const newItem = await response.json();
                updatedCart = [...existingCart, newItem];
            }

            saveCartToLocalStorage(updatedCart);
            return updatedCart;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async (id, { rejectWithValue }) => {
        try {
            await fetch(`http://localhost:5000/cart/${id}`, { method: "DELETE" });

            const updatedCart = loadCartFromLocalStorage().filter(item => item.id !== id);
            saveCartToLocalStorage(updatedCart);

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const placeOrder = createAsyncThunk(
    "cart/placeOrder",
    async (orderData, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch("http://localhost:5000/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) throw new Error("Ошибка оформления заказа");

            // dispatch(clearCart());
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromLocalStorage(),
        status: "idle",
        error: null,
    },
    reducers: {
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cart");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            })
            .addCase(placeOrder.pending, (state) => {
                state.status = "loading";
            })
            .addCase(placeOrder.fulfilled, (state) => {
                state.status = "succeeded";
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
