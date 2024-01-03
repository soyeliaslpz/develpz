import { createSlice } from "@reduxjs/toolkit";

export const develpzSlice = createSlice({
  name: "example",
  initialState: {
    example: [],
  },

  reducers: {
    //Set data
    setExample: (state, action) => {
      state.example = action.payload;
    },
  },
});
export const { setExample } = develpzSlice.actions;
