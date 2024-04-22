import { useState } from "react";

export const useChangeZipCode = () => {
  const [zipCode, setZipCode] = useState(0);
  const changeZipCode = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setZipCode(+e.target.value);
  };
  return { zipCode, changeZipCode, setZipCode };
};
