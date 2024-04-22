import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "./pages/createEmployee/CreateEmployee";
import { EmployeeList } from "./pages/employeeList/EmployeeList";
import { useState } from "react";
import { Employee } from "./types/Employee";

function App() {
  const [employeesList, setEmployeesList] = useState<Array<Employee>>([
    {
      key:"1",
      firstName: "John",
      lastName: "Smith",
      dateOfBirth: "20/05/1988",
      dateOfStart: "15/08/2012",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: 10001,
      department: "Engineering",
    },
    {
      key:"2",
      firstName: "Emily",
      lastName: "Johnson",
      dateOfBirth: "12/09/1992",
      dateOfStart: "10/03/2016",
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zipCode: 90001,
      department: "Sales",
    },
    {
      key:"3",
      firstName: "Michael",
      lastName: "Williams",
      dateOfBirth: "30/03/1985",
      dateOfStart: "25/11/2010",
      street: "789 Oak St",
      city: "Chicago",
      state: "IL",
      zipCode: 60601,
      department: "Human Resources",
    },
  ]);

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
          element: (
            <CreateEmployee
              save={setEmployeesList}
              employeesList={employeesList}
            />
          ),
        },
        {
          path: "/employee",
          element: <EmployeeList employeesList={employeesList} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
