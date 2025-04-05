import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRecommendeds  = createAsyncThunk("recommended/get-all-recommended", async () => {
    const response = await api.get("/store/eshop/recommended/get-all-recommended")
  if (!response.statusText==="OK") throw new Error("Failed to fetch user");
  
  const data = await response.data
  return data;
});

const initialState = {
  data:[],
  loading: true,
};

const recommendedSlice = createSlice({
  name: "Recommended",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendeds .pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecommendeds .fulfilled, (state, action) => {
        const data = action.payload;
        
        if (!data) {
          Object.assign(state, initialState);
          return;
        }

        state.data = data
        state.loading = false;
      })
      .addCase(getRecommendeds .rejected, (state) => {
        Object.assign(state, initialState);
        state.loading = false
        return
      });
  },
});

export const { } = recommendedSlice.actions;
export default recommendedSlice.reducer;