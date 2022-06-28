//temporary user data
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 70,
    },
    {
      field: 'position', headerName: 'Position', width: 130
    },
    {
      field: 'department', headerName: 'Department', width: 130
    },
    {
      field: 'email', headerName: 'Email', width: 160
    },

  ];

export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, position: "Head Nurse", department: "Gyneacology", email: "j.snow@exampleclinic.com"  },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, position: "Nurse Practitioner", department: "Emergency", email: "l.cersei@exampleclinic.com" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, position: "Nurse Midwife", department: "Gyneacology", email: "l.jamie@exampleclinic.com" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, position: "Junior Orderly", department: "Oncology", email: "s.arya@exampleclinic.com" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, position: "Cleaner", department: "Maintenance", email: "t.daenerys@exampleclinic.com" },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, position: "House Ghost", department: "Spook", email: "melisandre@exampleclinic.com" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, position: "IT Technician", department: "IT", email: "c.ferrara@exampleclinic.com" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, position: "Doctor", department: "Pediatrics", email: "f.rossini@exampleclinic.com" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, position: "Registered Nurse", department: "Pediatrics", email: "r.harvey@exampleclinic.com" },
  ];

export const patientColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 70,
    },
    {
      field: 'phoneNumber', headerName: 'Phone Number', width: 130
    },
    {
      field: 'department', headerName: 'Department', width: 130
    },
    {
      field: 'doctorName', headerName: "Dr's Name", width: 160
    },
]
export const patientRows = [
  {
    id: 1,
    firstName: "Bilbo",
    lastName: "Baggins",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Elrond"
  },
  {
    id: 2,
    firstName: "Frodo",
    lastName: "Baggins",
    age: "23",
    department: "Burns",
    doctorName: "Dr Elrond"
  },
  {
    id: 3,
    firstName: "Peregrin",
    lastName: "Took",
    age: "22",
    department: "General Medicine",
    doctorName: "Dr Gandalf"
  },
  {
    id: 4,
    firstName: "Samwise",
    lastName: "Gamgee",
    age: "23",
    department: "Burns",
    doctorName: "Dr Elrond"
  },
  {
    id: 6,
    firstName: "Gimli",
    lastName: "Dwarf",
    age: "80",
    department: "Orthopedic",
    doctorName: "Dr Saruman"
  },
  {
    id: 7,
    firstName: "Legolas",
    lastName: "Elf",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Elrond"
  },
  {
    id: 8,
    firstName: "Bilbo",
    lastName: "Baggins",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Elrond"
  },
  {
    id: 9,
    firstName: "Bilbo",
    lastName: "Baggins",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Elrond"
  },
  {
    id: 10,
    firstName: "Bilbo",
    lastName: "Baggins",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Galadriel"
  },
  {
    id: 11,
    firstName: "Bilbo",
    lastName: "Baggins",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Elrond"
  },
  {
    id: 12,
    firstName: "Bilbo",
    lastName: "Baggins",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Elrond"
  },
  {
    id: 13,
    firstName: "Bilbo",
    lastName: "Baggins",
    age: "115",
    department: "Orthopedic",
    doctorName: "Dr Elrond"
  },
]