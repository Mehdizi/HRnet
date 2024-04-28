import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "./pages/createEmployee/CreateEmployee";
import { EmployeeList } from "./pages/employeeList/EmployeeList";
import { useState } from "react";
import { Employee } from "./types/Employee";
import { fakeEmployees } from "./datas/fakeEmployees";

function App() {
  const [employeesList, setEmployeesList] = useState<Array<Employee>>(fakeEmployees);
  console.log(employeesList)
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
