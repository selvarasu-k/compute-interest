import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrowed: [],
  selectedRows: [],
  isCheckAll: false,
  showModel: false,
  editMode: false,
};

const borrowedSlice = createSlice({
  name: "borrowed",
  initialState,
  reducers: {
    addBorrowData: (state, action) => {
      state.borrowed.push(action.payload);
    },
    fetchBorrowData: (state, action) => {
      state.borrowed = action.payload;
    },
    updateBorrowData: (state, action) => {
      const index = state.borrowed.findIndex(
        (row) => row.id === action.payload.id
      );
      if (index !== -1) {
        state.borrowed[index] = action.payload;
      }
      state.selectedRows = [];
    },
    deleteBorrowData: (state) => {
      state.borrowed = state.borrowed.filter(
        (row) => !state.selectedRows.includes(row.id)
      );
      state.selectedRows = [];
      state.isCheckAll = false;
    },
    deleteAll: (state) => {
      state.isCheckAll = !state.isCheckAll;
      if (state.isCheckAll) {
        state.selectedRows = state.borrowed.map((li) => li.id);
      } else {
        state.selectedRows = [];
      }
    },
    rowSelection: (state, action) => {
      if (state.selectedRows.includes(action.payload)) {
        state.selectedRows = state.selectedRows.filter(
          (id) => id !== action.payload
        );
      } else {
        state.selectedRows.push(action.payload);
      }
    },
    setShowModel: (state, action) => {
      state.showModel = action.payload;
    },
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
  },
});

export const {
  addBorrowData,
  fetchBorrowData,
  updateBorrowData,
  deleteBorrowData,
  deleteAll,
  rowSelection,
  setShowModel,
  setEditMode,
} = borrowedSlice.actions;

export default borrowedSlice.reducer;
