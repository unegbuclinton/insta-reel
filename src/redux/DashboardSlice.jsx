import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfilesVideos, likePost, userData } from "../api/dashboard";

const initialState = {
  isLoading: false,
  pageNumber: 0,
  userData: {},
  profiles: [],
};

export const uploadProfilesVideos = createAsyncThunk(
  "dashboard/uploadProfiles",
  getProfilesVideos
);
export const updateProfileVideosList = createAsyncThunk(
  "dashboard/uploadProfilesList",
  getProfilesVideos
);

export const likeAPost = createAsyncThunk("dashboard/likeAPost", likePost);

export const getUserData = createAsyncThunk("dashboard/getUserData", userData);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    resetDashboardState: () => initialState,
    pageCounter: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadProfilesVideos.fulfilled, (state, action) => {
      state.profiles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(uploadProfilesVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadProfilesVideos.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateProfileVideosList.fulfilled, (state, action) => {
      state.profiles = [...state.profiles, ...action.payload];
    });

    builder.addCase(likeAPost.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = {
        email: action.payload.email,
        name: action.payload.name,
        balance: action.payload.earnedMoney,
        limit: action.payload.limitReached,
      };
    });
  },
});

export const { pageCounter, resetDashboardState } = dashboardSlice.actions;

export default dashboardSlice.reducer;
