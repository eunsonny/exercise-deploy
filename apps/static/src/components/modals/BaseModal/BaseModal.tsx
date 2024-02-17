import { ModalContext, ModalDispatchContext } from "@/context/ModalProvider";
import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./BaseModal.styles.css";

const BaseModal = () => {
  const { modals, isOpen, setIsOpen } = useContext(ModalContext);
  const { close } = useContext(ModalDispatchContext);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        {modals.map((modal, index) => {
          const { Component, props } = modal;
          const zIndex = `${1000 - index * 10}`;

          const onClose = () => {
            close(Component);
          };

          return (
            <div key={index} className={`DialogContent z-[${zIndex}]`}>
              <Component onClose={onClose} {...props} key={index} />
            </div>
          );
        })}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BaseModal;
