import React from 'react';
import { ModalContext } from './ModalContext';

export type ModalProps = {
  id: string;
  initialData?: any;
  onClose?: (data: any) => void;
}

const ModalsRoot: React.FC<{}> = () => {
  const { modals, closeModal } = React.useContext(ModalContext);

  return (
    <div>
      {
        modals.length ? modals.map(({ component: Component, id, initialData, onClose }, index) => {
          const componentProps = {
            id,
            initialData,
            onClose: (data: any) => {
              closeModal(id);
              if (onClose) onClose(data);
            },
          }

          return (
            <Component key={index} {...componentProps} />
          )
        }) : null
      }
    </div>
  )
}

export {
  ModalsRoot
}