import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

import { Modal } from "npm-react-modal-mehdizi"
import { useModal } from "npm-react-modal-mehdizi";

import { states } from "../../datas/states";
import { departments } from "../../datas/departments";

import { DatePicker,  Select, Input } from "antd";

import { Employee } from "../../types/Employee";
import { useChangeFirstName } from "../../hooks/useChangeFirstName";
import { useChangeLastName } from "../../hooks/useChangeLastName";
import { useChangeBirthDate } from "../../hooks/useChangeBirthDate";
import { useChangeStartDate } from "../../hooks/useChangeStartDate";
import { useChangeState } from "../../hooks/useChangeState";
import { useChangeStreet } from "../../hooks/useChangeStreet";
import { useChangeCity } from "../../hooks/useChangeCity";
import { useChangeZipCode } from "../../hooks/useChangeZipCode";
import { useChangeDepartment } from "../../hooks/useChangeDepartment";

export const CreateEmployee = ({
  save,
  employeesList,
}: {
  save: React.Dispatch<React.SetStateAction<Array<Employee>>>;
  employeesList: Employee[];
}) => {

  const {isOpen, handleToggleModal } = useModal()

  const { firstName, changeFirstName, setFirstName } = useChangeFirstName();
  const { lastName, changeLastName, setLastName } = useChangeLastName();
  const { changeStreet, street, setStreet } = useChangeStreet();
  const { changeCity, city, setCity } = useChangeCity();
  const {changeState, state, setState } = useChangeState()
 const { changeZipCode, zipCode, setZipCode } = useChangeZipCode()
 const {changeDepartment, department, setDepartment} = useChangeDepartment()

  const {
    changeBirthDate,
    birthDate,
    formattedBirthDate,
    setBirthDate,
    setFormattedBirthDate,
  } = useChangeBirthDate();
  const {
    changeStartDate,
    startDate,
    formattedStartDate,
    setStartDate,
    setFormattedStartDate,
  } = useChangeStartDate();

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
    setFormattedBirthDate("");
    setStartDate(null);
    setFormattedStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode(0);
    setDepartment("");
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault;
    const newEmployee = {
      key: uuidv4(),
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
      <Modal isOpen={isOpen} message="New employee created !" handleCloseModal={handleToggleModal} />
      <main className="mb-2 max-w-5xl m-auto">
        <h1 className="flex justify-center text-5xl font-bold my-5">HRnet</h1>
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Link
            className="italic cursor-pointer underline text-cyan-500"
            to="/employee"
          >
            View current Employees
          </Link>
          <h2 className="text-4xl text-bold">Create Employee</h2>
          <form
            className="flex flex-col justify-center items-center gap-2.5 border border-solid rounded-lg border-cyan-400 p-5 w-full sm:w-2/3"
            action="#"
            id="create-employee"
            onSubmit={handleOnSubmit}
          >
            <div className="bg-cyan-400 flex justify-between flex-col w-full rounded-md">
              <div className="flex">
                <div className="w-1/2 p-5 flex flex-col gap-2.5 border-r-1 rounded-sm border-sold border-black">
                  <h3 className="font-bold text-m italic text-center sm:w-full w-5 underline">
                    Personal informations
                  </h3>
                  <label htmlFor="first-name">First Name</label>
                  <Input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={changeFirstName}
                  />

                  <label htmlFor="last-name">Last Name</label>
                  <Input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={changeLastName}
                  />

                  <label htmlFor="date-of-birth">Date of Birth</label>
                  <DatePicker onChange={changeBirthDate} value={birthDate} />

                  <label htmlFor="start-date">Start Date</label>
                  <DatePicker onChange={changeStartDate} value={startDate} />
                </div>
                <div className="w-1/2 p-5 flex flex-col gap-2.5 border-r-1 rounded-sm border-sold border-black">
                  <h3 className="font-bold text-m italic text-center w-full underline  sm:mb-0 mb-6">
                    Adress
                  </h3>
                  <label htmlFor="street">Street</label>
                  <Input
                    id="street"
                    type="text"
                    value={street}
                    onChange={changeStreet}
                  />

                  <label htmlFor="city">City</label>
                  <Input
                    id="city"
                    type="text"
                    value={city}
                    onChange={changeCity}
                  />

                  <label htmlFor="state">State</label>
                  <Select
                    value={state}
                    placeholder="Select a state"
                    options={formattedStates}
                    onChange={changeState}
                  />

                  <label htmlFor="zip-code">Zip Code</label>
                  <Input
                    id="zip-code"
                    type="number"
                    value={zipCode}
                    onChange={changeZipCode}
                  />
                </div>
              </div>
              <div className="p-x-5 pb-5 w-1/2 flex flex-col m-auto gap-2.5">
                <label htmlFor="department">Department</label>
                <Select
                  value={department}
                  placeholder="Select a department"
                  options={formattedDepartments}
                  onChange={changeDepartment}
                />
              </div>
            </div>
            <button
              className="border p-2.5 rounded-md border-cyan-500 bg-cyan-400 hover:bg-cyan-500 hover:border-cyan-400"
              type="submit"
            >
              Save an employee
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
