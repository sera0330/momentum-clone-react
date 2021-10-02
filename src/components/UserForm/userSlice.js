import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: (state) => "",
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
