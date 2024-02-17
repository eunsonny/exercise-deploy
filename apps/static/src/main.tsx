import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import router from "./routes.tsx";
import ModalProvider from "./context/ModalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
