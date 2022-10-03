import { AlertModalState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AlertModalState = {
  modalMessages: [],
};

const slice = createSlice({
  name: "alertModalSlice",
  initialState,
  reducers: {
    setSuccessAlertModal: (state, action: PayloadAction<string>) => {
      state.modalMessages.push({
        type: "success",
        message: action.payload,
      });
    },
    setFailureAlertModal: (state, action: PayloadAction<string>) => {
      if (state.modalMessages.map((message) => message.message).includes(action.payload)) {
        return;
      }
      state.modalMessages.push({
        type: "failure",
        message: action.payload,
      });
    },
    setCloseAlertModal: (state) => {
      state.modalMessages.splice(0, 1);
    },
  },
});

export const alertModalState = slice.reducer;
export const setSuccessAlertModalRequest = slice.actions.setSuccessAlertModal;
export const setFailureAlertModalRequest = slice.actions.setFailureAlertModal;
export const setCloseAlertModalRequest = slice.actions.setCloseAlertModal;
