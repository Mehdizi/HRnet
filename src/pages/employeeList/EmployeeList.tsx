import { Link } from "react-router-dom";
import { Input } from "antd";
import { Employee } from "../../types/Employee";
import { ChangeEvent, useState } from "react";
import { ScrollTable } from "../../components/ScrollTable";
import { columns } from "../../datas/tableColumn";

export const EmployeeList = ({
  employeesList: employeesList,
}: {
  employeesList: Employee[];
}) => {
  const [filteredData, setFilteredData] = useState<Employee[]>(employeesList);

  const filterData = (e: ChangeEvent<HTMLInputElement>) => {
    const newDataArray = employeesList.filter((employee) => {
      const searchInput = e.target.value.toLowerCase();
      if (
        employee.firstName.toLowerCase().includes(searchInput) ||
        employee.lastName.toLowerCase().includes(searchInput) ||
        employee.dateOfBirth.toLowerCase().includes(searchInput) ||
        employee.dateOfStart.toLowerCase().includes(searchInput) ||
        employee.state.toLowerCase().includes(searchInput) ||
        employee.street.toLowerCase().includes(searchInput) ||
        employee.department.toLowerCase().includes(searchInput) ||
        employee.city.toLowerCase().includes(searchInput)
      )
        return employee;
    });
    setFilteredData(newDataArray);
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center gap-3">
        <h1 className="flex justify-center text-3xl font-bold my-5 md:text-5xl">
          Current Employees
        </h1>
        <div className="flex justify-center items-center gap-1 md:text-m">
          <label className="w-1/3 md:text-xl text-base" htmlFor="searchBar">
            Search :
          </label>
          <Input
            className="w-2/3"
            id="searchBar"
            onChange={(e) => filterData(e)}
          />
        </div>
        <ScrollTable columns={columns} filteredData={filteredData} />
        <Link
          className="italic cursor-pointer underline text-cyan-500 mb-2.5 md:text-xl text-base"
          to="/"
        >
          Home
        </Link>
      </main>
    </>
  );
};
