import { Link } from "react-router-dom";
import { column } from "../../datas/tableColumn";
import { Table } from "antd";
import { Employee } from "../../types/Employee";
import { Modal } from "my-react-modal-by-mehdizi/src/modal";
import { useModal } from "my-react-modal-by-mehdizi/src/useModal";

export const EmployeeList = ({
  employeesList: employeesList,
}: {
  employeesList: Employee[];
}) => {
  const { isOpen, handleToggleModal } = useModal();
  const data: Employee[] = employeesList;
  console.log(data);
  return (
    <>
      <Modal
        message="Hello"
        isOpen={isOpen}
        handleCloseModal={handleToggleModal}
      />
      <div
        id="employee-div"
        className="flex flex-col items-center justify-center gap-5">
        <h1 className="flex justify-center text-5xl font-bold my-5">
          Current Employees
        </h1>
        <Table className="z-0" columns={column} dataSource={data} />
        <Link
          className="italic cursor-pointer underline text-cyan-500 mb-2.5"
          to="/">
          Home
        </Link>
      </div>
      <button onClick={handleToggleModal}>clique here</button>
    </>
  );
};
