import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import MasterComponent from "./Components/MasterComponent";
import { ThemeContext } from "./ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="Dashboard"></Navigate>,
    // Component: MasterComponent,
  },
  {
    path: "/",
    element: <MasterComponent />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const theme = {
  branding: "Living Liquidz",
  backgroundColor: "black",
  color: "#ae9479",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext.Provider value={theme}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  </React.StrictMode>
);
