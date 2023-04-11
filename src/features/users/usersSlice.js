import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Luke Brown" },
  { id: "1", name: "Sally Sheehan" },
  { id: "2", name: "Matthew Jones" },
  { id: "3", name: "Tom Sidaway" },
  { id: "4", name: "Terry Black" },
  { id: "5", name: "Mary Cooper" },
  { id: "6", name: "Zack Frost" },
  { id: "7", name: "Alicia Jackson" },
  { id: "8", name: "Trish Frost" },
  { id: "9", name: "Alex Johnson" },
  { id: "10", name: "Barry Cushnie" },
  { id: "11", name: "Andrew Armstrong" },
  { id: "12", name: "Natasha McArthur" },
];

const usersSlice = createSlice({
  name: "userspopo",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
