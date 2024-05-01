import { useState } from "react";

export const useChangeZipCode = () => {
  const [zipCode, setZipCode] = useState(0);
  const changeZipCode = (e:any) => {
    setZipCode(e.target.value);
  };
  return { zipCode, changeZipCode, setZipCode };
};
