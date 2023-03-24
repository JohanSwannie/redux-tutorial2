import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Johan Swan" },
  { id: "1", name: "Estelle Vorster" },
  { id: "2", name: "Petra Davis" },
  { id: "3", name: "Ida Maree" },
  { id: "4", name: "Sanette Bezuidenhout" },
  { id: "5", name: "Amanda Smit" },
  { id: "6", name: "Andries Theron" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
