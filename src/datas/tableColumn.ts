export const columns = [
  {
    title: "First name",
    dataIndex: "firstName",
    key: "firstName",
    width:50
  },
  {
    title: "Last name",
    dataIndex: "lastName",
    key: "lastName",
    width:50

  },
  {
    title: "Date of start",
    dataIndex: "dateOfStart",
    key: "dateOfStart",
    width:50

  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    width:75

  },
  {
    title: "Date of birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    width:50

  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
    width:75

  },
  {
    title: "City ",
    dataIndex: "city",
    key: "city",
    width:50

  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    width:50

  },
  {
    title: "Zip code",
    dataIndex: "zipCode",
    key: "zipCode",
    sorter: (a: { zipCode: number }, b: { zipCode: number }) =>
      a.zipCode - b.zipCode,
    width:50

  },
];
