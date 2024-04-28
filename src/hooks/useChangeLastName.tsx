import { useState } from "react";

export const useChangeLastName = () => {
  const [lastName, setLastName] = useState("");
  const changeLastName = (value:string) => {
    setLastName(value);
  };
  return { lastName, changeLastName };
};
