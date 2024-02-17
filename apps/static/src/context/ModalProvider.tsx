import BaseModal from "@/components/modals/BaseModal/BaseModal";
import { ReactNode, createContext, useMemo, useState } from "react";

export type ModalItem = {
  Component: any;
  props?: Record<string, unknown>;
};

interface ModalContextProps {
  modals: ModalItem[];
  isOpen: boolean;
}

export const ModalContext = createContext<ModalContextProps>({
  modals: [],
  isOpen: false,
});

interface ModalDispatchContextProps {
  open: (modal: ModalItem) => void;
  close: (component: ModalItem["Component"]) => void;
}

export const ModalDispatchContext = createContext<ModalDispatchContextProps>({
  open: () => {},
  close: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openedModals, setOpenedModals] = useState<ModalItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const open = (modal: ModalItem) => {
    setOpenedModals((prev) => {
      return [...prev, { ...modal }];
    });
    setIsOpen(true);
  };

  const close = (Component: ModalItem["Component"]) => {
    setOpenedModals((prev) => {
      return prev.filter((modal) => modal.Component !== Component);
    });
    setIsOpen(false);
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalContext.Provider value={{ modals: openedModals, isOpen }}>
      <ModalDispatchContext.Provider value={dispatch}>
        <BaseModal />
        {children}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
