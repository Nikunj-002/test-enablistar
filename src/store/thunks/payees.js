import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPayees = createAsyncThunk("payees/fetch", async () => {
  const response = await axios.get("http://localhost:3005/payees");

  return response.data;
});

export { fetchPayees };

const addPayee = createAsyncThunk("payees/add", async (data) => {
  const response = await axios.post("http://localhost:3005/payees", {
    ...data,
  });

  return response.data;
});

export { addPayee };

const editPayee = createAsyncThunk("payees/edit", async ({ editId, data }) => {
  console.log(editId);
  const response = await axios.put(`http://localhost:3005/payees/${editId}`, {
    ...data,
  });
  return response.data;
});

export { editPayee };

const removePayee = createAsyncThunk("payees/remove", async (payee) => {
  await axios.delete(`http://localhost:3005/payees/${payee.id}`);

  return payee;
});

export { removePayee };
