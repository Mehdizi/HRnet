import "./CreateEmployee.scss";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../componants/modal/Modal";
import { useState } from "react";
import { states } from "../../datas/states";
import { departments} from "../../datas/departments";

import { DatePicker, DatePickerProps, Select, SelectProps } from "antd";

export type Employee = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  dateOfStart: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  department: string;
};

export const CreateEmployee = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);

  const { isOpen, handleToggleModal } = useModal();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState<any>("");
  const [startDate, setStartDate] = useState<any>("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [department, setDepartment] = useState("");

  const changeBirthDate: DatePickerProps["onChange"] = (date, dateString) => {
    setBirthDate(dateString);
  };

  const changeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    setStartDate(dateString);
  };

  const selectState: SelectProps["onChange"] = (value) => {
    setState(value);
  };

  const selectDepartment: SelectProps["onChange"] = (value) => {
    setDepartment(value);
  };

  const formattedStates = states.map((state) => {
    return {
      value: state.name,
      abbr: state.abbreviation
    };
  });

  const formattedDepartments = departments.map((department) => {
    return {
      label: department.label,
      value: department.label,
    };
  });

  const handleResetFormField = () => {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode(0);
    setDepartment("");
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault;
    setEmployee([
      ...employee,
      {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birthDate,
        dateOfStart: startDate,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department,
      },
    ]);
    handleResetFormField();
    console.log(employee);    
  };

  const handleOnSubmit = () => {
    handleToggleModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} handleCloseModal={handleToggleModal}>
        <p> Employee Created!</p>
      </Modal>
      <main>
        <h1 className="title">HRnet</h1>
        <div className="container">
          <Link to="/employee">View current Employees</Link>
          <h2>Create Employee</h2>
          <form action="#" id="create-employee" onSubmit={handleOnSubmit}>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />

            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker onChange={changeBirthDate} />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker onChange={changeStartDate} />

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <Select
              style={{ width: "100%" }}
              placeholder="Select a state"
              options={formattedStates}
              onChange={selectState}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(+e.target.value)}
            />

            <label htmlFor="department">Department</label>
            <Select
              placeholder="Select a department"
              style={{ width: "100%" }}
              options={formattedDepartments}
              onChange={selectDepartment}
            />

            <button type="submit" onClick={(e) => onSubmit(e)}>
              Save
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
