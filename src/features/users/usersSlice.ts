import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersState, User } from "./types";

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  sortBy: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilter(state, action: PayloadAction<Partial<UsersState["filter"]>>) {
      state.filter = { ...state.filter, ...action.payload };
      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(state.filter.name.toLowerCase()) &&
          user.username
            .toLowerCase()
            .includes(state.filter.username.toLowerCase()) &&
          user.email.toLowerCase().includes(state.filter.email.toLowerCase()) &&
          user.phone.toLowerCase().includes(state.filter.phone.toLowerCase())
      );
    },
    setSortBy(state, action: PayloadAction<keyof User>) {
      state.sortBy = action.payload;
      state.filteredUsers = [...state.filteredUsers].sort((a, b) => {
        if (a[state.sortBy!] < b[state.sortBy!]) return -1;
        if (a[state.sortBy!] > b[state.sortBy!]) return 1;
        return 0;
      });
    },
    resetSort(state) {
      state.sortBy = null;
      state.filteredUsers = [...state.filteredUsers];
    },
  },
});

export const { setUsers, setFilter, setSortBy, resetSort } = userSlice.actions;
export default userSlice.reducer;
