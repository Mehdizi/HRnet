import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "./pages/createEmployee/CreateEmployee";
import { EmployeeList } from "./pages/employeeList/EmployeeList";
import React from "react";
import App from "./App";

// faire un context

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
