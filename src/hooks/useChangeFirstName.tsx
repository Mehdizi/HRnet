import React, { useState } from "react";

export const useChangeFirstName = () => {
  const [firstName, setFirstName] = useState("");
  const changeFirstName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFirstName(e.target.value);
  };
  return { firstName, changeFirstName };
};
