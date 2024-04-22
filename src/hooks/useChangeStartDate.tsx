import { DatePickerProps } from "antd";
import { useState } from "react";

export const useChangeStartDate = () => {
  const [startDate, setStartDate] = useState<any>("");
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const changeStartDate: DatePickerProps["onChange"] = (date) => {
    setStartDate(date);
    const choosenDate = new Date(date.format());
    const day = String(choosenDate.getDate()).padStart(2, "0");
    const month = String(choosenDate.getMonth() + 1).padStart(2, "0");
    const year = choosenDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    setFormattedStartDate(formattedDate);
  };
  return { changeStartDate, startDate, formattedStartDate, setStartDate, setFormattedStartDate };
};
