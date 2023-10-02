import React, { ReactNode, createContext, useState } from "react";

type ModalComponentProps = {
  id?: string;
  component: React.FC<any>;
  initialData?: any;
  onClose?: (data: any) => void;
}

export type ModalContextProps = {
  modals: ModalComponentProps[];
  openModal: (modal: ModalComponentProps) => void;
  closeModal: (id?: string) => void;
  closeAllModal: () => void;
};

type ChildContainerProps = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: ChildContainerProps) => {
  const [modals, setModals] = useState<ModalComponentProps[]>([]);

  const openModal = (modal: ModalComponentProps) => {
    setModals((prev: ModalComponentProps[]) => [...prev, {
      ...modal,
      id: modal.id ? modal.id : modal.component.name
    }]);
  }

  const closeModal = (id?: string) => {
    setModals((prev: ModalComponentProps[]) => prev.filter((modal) => modal.id != id));
  }

  const closeAllModal = () => {
    setModals((prev: ModalComponentProps[]) => []);
  }

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, closeAllModal }}>
      {children}
    </ModalContext.Provider>
  );
};