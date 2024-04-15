import { useState } from "react";

export const useChangeLastName = () => {
  const [lastName, setLastName] = useState("");
  const changeLastName = (e: any) => {
    setLastName(e.target.value);
  };
  return { lastName, changeLastName };
};
