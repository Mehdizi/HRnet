import { useState } from "react";

export const useChangeStreet = () => {
  const [street, setStreet] = useState("");
  const changeStreet = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setStreet(e.target.value);
  };
  return { street, changeStreet, setStreet };
};
