import { Table } from "antd";

export const ScrollTable = ({columns, filteredData} : {columns:any, filteredData:any}) => {
  return (
    <Table columns={columns} dataSource={filteredData} scroll={{ x: 1300 }} />
  );
};
