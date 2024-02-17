import Portal from "@/components/Portal";
import { ModalContext, ModalDispatchContext } from "@/context/ModalProvider";
import { useContext } from "react";

const BaseModal = () => {
  const { modals, isOpen } = useContext(ModalContext);
  const { close } = useContext(ModalDispatchContext);

  return isOpen ? (
    <Portal selector="#modal">
      <div className="fixed flex h-full w-full items-center justify-center bg-[#000]/50">
        {modals.map((modal, index) => {
          const { Component, props } = modal;
          const modalContainerStyle = `z-${
            1000 - index * 10
          } absolute rounded-[15px] bg-white px-[32px] py-[34px]`;

          const onClose = () => {
            close(Component);
          };

          return (
            <div key={index} className={modalContainerStyle}>
              <Component onClose={onClose} {...props} />
            </div>
          );
        })}
      </div>
    </Portal>
  ) : null;
};

export default BaseModal;
