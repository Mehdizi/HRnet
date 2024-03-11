import "./CreateEmployee.scss";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../componants/modal/Modal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { states } from "../../datas/states";
import { departements } from "../../datas/departements";

export const CreateEmployee = () => {
  const { isOpen, handleToggleModal } = useModal();
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());

  const formattedStates = states.map((state) => {
    return {
      label: state.name,
    };
  });

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
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date!)}
            />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date!)}
            />

            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input id="street" type="text" />

              <label htmlFor="city">City</label>
              <input id="city" type="text" />

              <label htmlFor="state">State</label>
              <Select
                options={formattedStates}
                defaultValue={formattedStates[0]}
              />

              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select options={departements} />

            <button type="submit">Save</button>
          </form>
        </div>
      </main>
    </>
  );
};
