import { useState } from "react";

export const useChangeBirthDate = () => {
  const [birthDate, setBirthDate] = useState(null);
  // const [formattedBirthDate, setFormattedBirthDate] = useState("");
  const changeBirthDate = (value:any) => {
    setBirthDate(value);
    // const choosenDate = new Date(date.format());
    // const day = String(choosenDate.getDate()).padStart(2, "0");
    // const month = String(choosenDate.getMonth() + 1).padStart(2, "0");
    // const year = choosenDate.getFullYear();
    // const formattedDate = `${month}/${day}/${year}`;
    // setFormattedBirthDate(formattedDate);
  };
  return { changeBirthDate, birthDate, setBirthDate };
};
