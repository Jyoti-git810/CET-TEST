import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userID: 1,
  answer: [],
};

const userResponseSlice = createSlice({
  name: "userResponse",
  initialState,
  reducers: {
    getUserResponse: (state, action) => {
      const data = action.payload;
      state.answer.push(data);
    },
    removeUserAns: (state, action) => {
      console.log("removeAns", action.payload);
      const removeAns = state.answer.filter(
        (data) => data.ans !== action.payload.ans
      );
      state.answer = removeAns;
    },
  },
});

export const { getUserResponse, removeUserAns } = userResponseSlice.actions;

export default userResponseSlice.reducer; // Note: use '.reducer' to export reducer
