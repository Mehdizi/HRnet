import { Link } from "react-router-dom";
import { column } from "../../datas/tableColumn";
import type { TableColumnsType, TableProps } from "antd";
import { Button, Space, Table } from "antd";
import { Employee } from "../../types/Employee";



export const EmployeeList = ({
  employeesList: employeesList,
}: {
  employeesList: Employee[];
}) => {
  const data: Employee[] = employeesList;
  console.log(data);
  return (
    <div id="employee-div" className="flex flex-col items-center justify-center gap-5">
      <h1 className="flex justify-center text-5xl font-bold my-5">Current Employees</h1>
      <Table columns={column} dataSource={data} />
      <Link className="italic cursor-pointer underline text-cyan-500 mb-2.5" to="/">Home</Link>
    </div>
  );
};
