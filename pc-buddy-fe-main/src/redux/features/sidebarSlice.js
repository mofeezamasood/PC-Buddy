import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["1"],
  adminValue: ["1"],
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.value = action.payload;
    },
    setAdminKey: (state, action) => {
      state.adminValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setKey, setAdminKey } = sidebarSlice.actions;

export const getKey = (state) => state.sidebar.value;
export const getAdminKey = (state) => state.sidebar.adminValue;

export default sidebarSlice.reducer;
