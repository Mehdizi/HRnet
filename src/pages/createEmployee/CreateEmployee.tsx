import "./CreateEmployee.scss";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../componants/modal/Modal";
import { useState } from "react";
import { states } from "../../datas/states";
import { departments } from "../../datas/departments";
import { DatePicker, DatePickerProps, Select, SelectProps, Input } from "antd";
import { Employee } from "../../types/Employee";



export const CreateEmployee = () => {
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

  const [employeesList, setEmployeesList] = useState<Employee[]>([])

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
      label: state.name,
      value: state.abbreviation,
    };
  });

  const formattedDepartments = departments.map((department) => {
    return {
      label: department.label,
      value: department.label,
    };
  });

  // const handleResetFormField = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setBirthDate("");
  //   setStartDate("");
  //   setStreet("");
  //   setCity("");
  //   setState("00");
  //   setZipCode(0);
  //   setDepartment("");
  // };

  const handleOnSubmit = () => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("oui")
    event.preventDefault;
    handleToggleModal();
    const employeesListCopy = employeesList
    const newEmployeesList = [...employeesListCopy, {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: birthDate,
      dateOfStart: startDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    }]
    setEmployeesList(newEmployeesList);
    console.log(newEmployeesList)
    // handleResetFormField();
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
            <Input
              type="text"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />

            <label htmlFor="last-name">Last Name</label>
            <Input
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
            <Input
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <Input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <Select
              value={state}
              style={{ width: "100%" }}
              placeholder="Select a state"
              options={formattedStates}
              onChange={selectState}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <Input
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(+e.target.value)}
            />

            <label htmlFor="department">Department</label>
            <Select
              value={department}
              placeholder="Select a department"
              style={{ width: "100%" }}
              options={formattedDepartments}
              onChange={selectDepartment}
            />

            <button type="submit">
              Save
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
