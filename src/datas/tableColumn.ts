export const column = [
  {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName',
    sorter: (a: { firstName: { lenght: number; }; }, b: any ) => a.firstName.lenght - a.firstName.lenght
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Date of start',
    dataIndex: 'dateOfStart',
    key: 'dateOfStart',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Date of birth',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
  },
  {
    title: 'Street',
    dataIndex: 'street',
    key: 'street',
  },
  {
    title: 'City ',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },{
    title: 'Zip code',
    dataIndex: 'zipCode',
    key: 'zipCode',
    sorter: (a: { zipCode: number; }, b: { zipCode: number; })=> a.zipCode - b.zipCode,
  }
]