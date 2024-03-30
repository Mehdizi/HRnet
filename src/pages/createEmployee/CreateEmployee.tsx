import "./CreateEmployee.scss";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../componants/modal/Modal";
import { useEffect, useState } from "react";
import { states } from "../../datas/states";
import { departments } from "../../datas/departments";
import { DatePicker, DatePickerProps, Select, SelectProps, Input } from "antd";
import { Employee } from "../../types/Employee";
import { valueType } from "antd/es/statistic/utils";

export const CreateEmployee = ({
  save,
  employeesList,
}: {
  save: React.Dispatch<React.SetStateAction<Array<Employee>>>;
  employeesList: Employee[];
}) => {


  const { isOpen, handleToggleModal } = useModal();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState<any>("");
  const [formattedBirthDate, setFormattedBirthDate] = useState("");
  const [startDate, setStartDate] = useState<any>("");
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [department, setDepartment] = useState("");

  const changeBirthDate: DatePickerProps["onChange"] = (date) => {
    setBirthDate(date)
    const choosenDate = new Date(date.format());
    const day = String(choosenDate.getDate()).padStart(2, "0");
    const month = String(choosenDate.getMonth() + 1).padStart(2, "0");
    const year = choosenDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    setFormattedBirthDate(formattedDate);
  };

  const changeStartDate: DatePickerProps["onChange"] = (date) => {
    setStartDate(date)
    const choosenDate = new Date(date.format());
    const day = String(choosenDate.getDate()).padStart(2, "0");
    const month = String(choosenDate.getMonth() + 1).padStart(2, "0");
    const year = choosenDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    setFormattedStartDate(formattedDate)
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

  const handleResetFormField = () => {
    setFirstName("");
    setLastName("");
    setBirthDate(null);
    setFormattedBirthDate("")
    setStartDate(null);
    setFormattedStartDate("")
    setStreet("");
    setCity("");
    setState("");
    setZipCode(0);
    setDepartment("");
  };

  const handleOnSubmit = (
    e:any
  ) => {
    e.preventDefault;
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: formattedBirthDate,
      dateOfStart: formattedStartDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    };
    save([...employeesList, newEmployee]);
    handleToggleModal();
    handleResetFormField();
  };

  return (
    <>
      <Modal isOpen={isOpen} handleCloseModal={handleToggleModal}>
        <p className="modal-text"> Employee Created!</p>
      </Modal>
      <main>
        <h1>HRnet</h1>
        <div className="container">
          <Link to="/employee">View current Employees</Link>
          <h2 className="title">Create Employee</h2>
          <form
            className="form"
            action="#"
            id="create-employee"
            onSubmit={handleOnSubmit}>
            <div className="form-field-container">
              <div className="form-container personal-info">
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
                <DatePicker onChange={changeBirthDate} value={birthDate} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker onChange={changeStartDate} value={startDate}/>
              </div>
              <div className="form-container location-info">
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
                  options={formattedDepartments}
                  onChange={selectDepartment}
                />
              </div>
            </div>

            <button type="submit">Save an employee</button>
          </form>
        </div>
      </main>
    </>
  );
};
