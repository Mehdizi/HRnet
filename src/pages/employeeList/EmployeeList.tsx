import { Link } from "react-router-dom";
import { column } from "../../datas/tableColumn";
import { Input, Table } from "antd";
import { Employee } from "../../types/Employee";
import { ChangeEvent, useState } from "react";

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
    <main className="flex flex-col justify-center items-center gap-3">
      <h1 className="flex justify-center text-5xl font-bold my-5">
        Current Employees
      </h1>
      <div className="flex justify-center items-center gap-1">
        <label className="w-1/4" htmlFor="searchBar">
          Search :
        </label>
        <Input
          className="w-3/4"
          id="searchBar"
          onChange={(e) => filterData(e)}
        />
      </div>
    <div className="font-4 max-lg:text-xs">
    <Table columns={column} dataSource={filteredData} />

    </div>
      <Link
        className="italic cursor-pointer underline text-cyan-500 mb-2.5"
        to="/"
      >
        Home
      </Link>
    </main>
  );
};
