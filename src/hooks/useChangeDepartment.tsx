import { SelectProps } from "antd";
import { useState } from "react";

export const useChangeDepartment = () => {
  const [department, setDepartment] = useState("");
  const changeDepartment: SelectProps["onChange"] = (value) => {
    setDepartment(value);
  };
  return { department, changeDepartment, setDepartment };
};
