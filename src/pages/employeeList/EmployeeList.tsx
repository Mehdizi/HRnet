import { Link } from "react-router-dom";
import { Employee } from "../../types/Employee";
import MuiTable from "../../components/MuiTable";

export const EmployeeList = ({
  employeesList: employeesList,
}: {
  employeesList: Employee[];
}) => {

  return (
    <>
      <main className="flex flex-col justify-center items-center gap-3">
        <h1 className="flex justify-center text-3xl font-bold my-5 md:text-5xl">
          Current Employees
        </h1>
        <div className="flex justify-center items-center gap-1 md:text-m">
        </div>
        <Link
          className="italic cursor-pointer underline text-cyan-500 mb-2.5 md:text-xl text-base"
          to="/"
        >
          Home
        </Link>
      </main>
      <MuiTable data={employeesList}/>
    </>
  );
};
