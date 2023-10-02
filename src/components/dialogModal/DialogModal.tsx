import React from 'react';
import { Dialog, DialogProps } from "primereact/dialog";
import { classNames } from "primereact/utils";

type DialogModalProps = {
  size: 'sm'| 'md' | 'lg' | 'xl'
} & DialogProps;


const DialogModal: React.FC<DialogModalProps> = (props) => {

  const getSize = (size: string) => {
    if (!size) return null;

    return `dialog-${size}`;
  }

  return (
    <Dialog
      modal
      visible={true}
      {...props}
      className={classNames(getSize(props.size), props.className)}
    >
      {props.children}
    </Dialog>
  );
}


export {
  DialogModal
}
