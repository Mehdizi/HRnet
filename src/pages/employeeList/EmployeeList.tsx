import { Link } from "react-router-dom";
import { column } from "../../datas/tableColumn";
import type { TableColumnsType, TableProps } from "antd";
import { Button, Space, Table } from "antd";
import { Employee } from "../../types/Employee";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export const EmployeeList = ({
  employeesList: employeesList,
}: {
  employeesList: Employee[];
}) => {
  const data: Employee[] = employeesList;
  console.log(data);
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table columns={column} dataSource={data} />
      <Link to="/">Home</Link>
    </div>
  );
};
