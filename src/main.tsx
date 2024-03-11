import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "./pages/createEmployee/CreateEmployee";
import { Employee } from "./pages/employee/Employee";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <CreateEmployee />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
