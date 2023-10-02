import React from "react";
import { ModalContext, ModalContextProps } from "./ModalContext";

export const useModal = (): Omit<ModalContextProps, 'modals'> => {
  const { openModal, closeModal, closeAllModal } = React.useContext(ModalContext);

  return {
    openModal,
    closeModal,
    closeAllModal
  }
}
