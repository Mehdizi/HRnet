import { useState } from "react";

export const useChangeCity = () => {
  const [city, setCity] = useState("");
  const changeCity = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCity(e.target.value);
  };
  return { changeCity, city,  setCity };
};
