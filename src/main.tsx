import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "./pages/createEmployee/CreateEmployee";
import { EmployeeList } from "./pages/employeeList/EmployeeList";
import React from "react";



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
        element: <EmployeeList />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
