import { DatePickerProps } from "antd";
import { useState } from "react";

export const useChangeStartDate = () => {
  const [startDate, setStartDate] = useState<any>("");
  const changeStartDate: DatePickerProps["onChange"] = (date) => {
    setStartDate(date);
  };
  return { changeStartDate, startDate, setStartDate };
};
