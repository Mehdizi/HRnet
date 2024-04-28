import { useState } from "react";

export const useChangeFirstName = () => {
  const [firstName, setFirstName] = useState("");
  const changeFirstName = (value:string)=> {
    setFirstName(value);
  };
  return { firstName, changeFirstName };
};
