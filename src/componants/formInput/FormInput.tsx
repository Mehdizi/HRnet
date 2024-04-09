import { Input } from "antd";
import React from "react";
import inputFirstName from "../../hooks/inputFirstName";

export type PropsType = {
  name:string
  label:string,
  id: string,
  type:string,
  value:string,
  onChange:any
}

const FormInput = ({name, label, id, type, value, onChange}:PropsType) => {
  const {firstName, changeName} = inputFirstName()
  return (
    <>
      <label htmlFor={label}>{name}</label>
      <Input id={id} type={type} value={value} onChange={onChange}/>
    </>
  );
};

export default FormInput;
