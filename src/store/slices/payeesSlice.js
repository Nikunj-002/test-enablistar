import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPayees,
  addPayee,
  removePayee,
  editPayee,
} from "../thunks/payees";

const payeesSlice = createSlice({
  name: "payees",
  initialState: {
    data: [],
  },

  extraReducers(builder) {
    builder.addCase(fetchPayees.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(addPayee.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    builder.addCase(removePayee.fulfilled, (state, action) => {
      state.data = state.data.filter((p) => {
        return p.id !== action.payload.id;
      });
    });

    builder.addCase(editPayee.fulfilled, (state, action) => {
      state.data = state.data.filter((p) => {
        if (p.id === action.payload.id) {
          return { ...p, ...action.payload.data };
        }
        return p;
      });
    });
  },
});

export { payeesSlice };
