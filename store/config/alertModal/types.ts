export type AlertModalType = "success" | "failure";

export interface ModalMessage {
  type: AlertModalType;
  message: string;
}

export interface AlertModalState {
  modalMessages: ModalMessage[];
}
