import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadLikesFromLocalStorage = () => {
    const likes = localStorage.getItem("likes");
    return likes ? JSON.parse(likes) : [];
};

const saveLikesToLocalStorage = (likes) => {
    localStorage.setItem("likes", JSON.stringify(likes));
};

export const fetchToLike = createAsyncThunk(
    "like/fetchToLike",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/Like");
            if (!response.ok) throw new Error("Ошибка загрузки избранного");
            const serverLikes = await response.json();

            const localLikes = loadLikesFromLocalStorage();

            const mergedLikes = [...serverLikes, ...localLikes.filter(
                localItem => !serverLikes.some(serverItem => serverItem.id === localItem.id)
            )];

            saveLikesToLocalStorage(mergedLikes); 

            return mergedLikes;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addToLike = createAsyncThunk(
    "like/addToLike",
    async (product, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/Like", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });
            if (!response.ok) throw new Error("Ошибка добавления в избранное");
            const newItem = await response.json();

            const updatedLikes = [...loadLikesFromLocalStorage(), newItem];
            saveLikesToLocalStorage(updatedLikes);

            return newItem;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeFromLike = createAsyncThunk(
    "like/removeFromLike",
    async (id, { rejectWithValue }) => {
        try {
            await fetch(`http://localhost:5000/Like/${id}`, { method: "DELETE" });

            const updatedLikes = loadLikesFromLocalStorage().filter(item => item.id !== id);
            saveLikesToLocalStorage(updatedLikes);

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const likeSlice = createSlice({
    name: "like",
    initialState: {
        items: loadLikesFromLocalStorage(),
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToLike.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchToLike.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchToLike.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(addToLike.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(removeFromLike.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            });
    },
});

export default likeSlice.reducer;
