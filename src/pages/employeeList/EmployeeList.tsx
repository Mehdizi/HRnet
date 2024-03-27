import { Link } from "react-router-dom";
import { column } from "../../datas/tableColumn";
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import { Employee } from "../../types/Employee";

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;



const data: Employee[] = [
  {
    firstName: "John",
    lastName: 'Doe',
    dateOfBirth: "01-01-1990",
    dateOfStart:"01-01-2010",
    street:"Street",
    city:"City",
    state: "World",
    zipCode:0,
    department: 'Dev',
  },
  {
    firstName: "Jean",
    lastName: 'Daniel',
    dateOfBirth: "01-01-1995",
    dateOfStart:"01-01-2015",
    street:"Fifa Street",
    city:"Without City",
    state: "Universe",
    zipCode:0,
    department: 'Sale',
  },
];

export const EmployeeList = () => {

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table columns={column} dataSource={data}/>
      <Link to="/">Home</Link>
    </div>
  );
};
