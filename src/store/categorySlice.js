import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoriesAndStyle  = createAsyncThunk("categories/get-all-categories", async () => {
  const response = await api.get("/store/eshop/categories/get-all-categories");
  if (!response.statusText==="OK") throw new Error("Failed to fetch user");
  
  const data = await response.data
  return data;
});

const initialState = {
  data:[],
  loading: true,
};

const categoriesSlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAndStyle .pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesAndStyle .fulfilled, (state, action) => {
        const data = action.payload;
        
        if (!data) {
          Object.assign(state, initialState);
          return;
        }

        state.data = data
        state.loading = false;
      })
      .addCase(getCategoriesAndStyle .rejected, (state) => {
        Object.assign(state, initialState);
        state.loading = false
        return
      });
  },
});

export const { } = categoriesSlice.actions;
export default categoriesSlice.reducer;