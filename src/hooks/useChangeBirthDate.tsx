import { DatePickerProps } from "antd";
import { useState } from "react";

export const useChangeBirthDate = () => {
  const [birthDate, setBirthDate] = useState<any>("");
  const changeBirthDate: DatePickerProps["onChange"] = (date) => {
    setBirthDate(date);   
  };
  return { changeBirthDate, birthDate, setBirthDate };
};
