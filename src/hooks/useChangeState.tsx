import { SelectProps } from "antd";
import { useState } from "react";

export const useChangeState = () => {
  const [state, setState] = useState("");
  const changeState: SelectProps["onChange"] = (value) => {
    setState(value);
  };
  return { state, changeState, setState };
};
