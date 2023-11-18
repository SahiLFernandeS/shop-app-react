import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import MasterComponent from './Components/MasterComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterComponent />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
