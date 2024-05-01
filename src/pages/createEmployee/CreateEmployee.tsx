import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Modal, useModal } from "npm-react-modal-mehdizi";
import { states } from "../../datas/states";
import { departments } from "../../datas/departments";
import { DatePicker, Select, Input, Form, Button } from "antd";
import { Employee } from "../../types/Employee";
import { useChangeFirstName } from "../../hooks/useChangeFirstName";
import { useChangeLastName } from "../../hooks/useChangeLastName";
import { useChangeStartDate } from "../../hooks/useChangeStartDate";
import { useChangeState } from "../../hooks/useChangeState";
import { useChangeStreet } from "../../hooks/useChangeStreet";
import { useChangeCity } from "../../hooks/useChangeCity";
import { useChangeZipCode } from "../../hooks/useChangeZipCode";
import { useChangeDepartment } from "../../hooks/useChangeDepartment";
import { useChangeBirthDate } from "../../hooks/useChangeBirthDate";

export const CreateEmployee = ({
  save,
  employeesList,
}: {
  save: React.Dispatch<React.SetStateAction<Array<Employee>>>;
  employeesList: Employee[];
}) => {
  const [form] = Form.useForm();
  const { isOpen, handleToggleModal } = useModal();

  const { firstName, changeFirstName, setFirstName } = useChangeFirstName();
  const { lastName, changeLastName, setLastName } = useChangeLastName();
  const { changeStreet, street, setStreet } = useChangeStreet();
  const { changeCity, city, setCity } = useChangeCity();
  const { changeState, state, setState } = useChangeState();
  const { changeZipCode, zipCode, setZipCode } = useChangeZipCode();
  const { changeDepartment, department, setDepartment } = useChangeDepartment();

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
      label: department,
      value: department,
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
    console.log("form", form);
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
    form.resetFields();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        message="New employee created !"
        handleCloseModal={handleToggleModal}
      />
      <main className="mb-2 max-w-5xl m-auto">
        <h1 className="flex justify-center text-5xl font-bold my-5">HRnet</h1>
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Link
            className="italic cursor-pointer underline text-cyan-900"
            to="/employee"
          >
            View current Employees
          </Link>
          <Form
            form={form}
            className="flex flex-col justify-center items-center gap-2.5 border border-solid rounded-lg border-cyan-400 p-5 w-full sm:w-2/3 "
            name="basic"     
            size={"small"}       
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={handleOnSubmit}
          >
            <div className="w-4/5 sm:w-2/3  bg-slate-200 p-5 rounded-md">
              <h2 className="text-3xl text-bold w-full text-center pb-8">
                Create Employee
              </h2>

              {/* <h3 className="font-bold text-m italic underline m-3 text-center">
                Personal informations
              </h3> */}
              <Form.Item<Employee>
                label="First name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input value={firstName} onChange={changeFirstName} />
              </Form.Item>
              <Form.Item<Employee>
                label="Last name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input value={lastName} onChange={changeLastName} />
              </Form.Item>
              <Form.Item<Employee>
                label="Birthday"
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please enter your birth date!",
                  },
                ]}
              >
                <DatePicker onChange={changeBirthDate} value={birthDate} />
              </Form.Item>
              <Form.Item<Employee> label="Date of start" name="dateOfStart">
                <DatePicker onChange={changeStartDate} value={startDate} />
              </Form.Item>

              {/* <h3 className="font-bold text-m italic text-center underline m-3">
                Adress
              </h3> */}
              <Form.Item<Employee> label="Street" name="street">
                <Input value={street} onChange={changeStreet} />
              </Form.Item>
              <Form.Item<Employee> label="City" name="city">
                <Input value={city} onChange={changeCity} />
              </Form.Item>
              <Form.Item<Employee> label="State" name="state">
                <Select
                  value={state}
                  onChange={changeState}
                  placeholder="Select a state"
                  options={formattedStates}
                />
              </Form.Item>
              <Form.Item<Employee> label="Zip code" name="zipCode">
                <Input type="number" value={zipCode} onChange={changeZipCode} />
              </Form.Item>

              <Form.Item<Employee>
                label="Department"
                name="department"
                rules={[
                  {
                    required: true,
                    message: "Please input your last deparment!",
                  },
                ]}
              >
                <Select
                  value={department}
                  onChange={changeDepartment}
                  placeholder="Select a department"
                  options={formattedDepartments}
                />
              </Form.Item>
              <div className="flex items-center justify-center">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save an employee
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
};
