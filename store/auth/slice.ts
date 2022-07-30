import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {};

const slice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});


