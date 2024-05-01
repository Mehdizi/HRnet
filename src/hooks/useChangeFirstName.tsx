import { useState } from "react"

export const useChangeFirstName = () => {
  const [firstName, setFirstName] = useState("");
  const changeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  return { firstName, changeFirstName, setFirstName };
};
