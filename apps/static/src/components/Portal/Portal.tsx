import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: PortalProps) => {
  if (!children) {
    throw new Error("children must be provided");
  }

  const targetDOM = document.querySelector(selector);

  return targetDOM ? ReactDOM.createPortal(children, targetDOM) : null;
};

export default Portal;
