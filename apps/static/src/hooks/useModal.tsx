import { ModalDispatchContext, ModalItem } from "@/context/ModalProvider";

import { useContext } from "react";

const useModal = () => {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (
    Component: ModalItem["Component"],
    props?: ModalItem["props"]
  ) => {
    open({ Component, props });
  };

  const closeModal = (Component: ModalItem["Component"]) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
