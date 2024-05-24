import { configureStore } from '@reduxjs/toolkit';
import { payeesSlice } from './slices/payeesSlice';

export const store = configureStore({
  reducer: {
    payees: payeesSlice.reducer,
  },
});


export * from './thunks/payees';
