import "./recentpatients.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Recentpatients = () => {

  const rows = [
    {
      patientId: 1,
      name: "John Smith",
      age: 26,
      complaint: "Hypertension",
      date: "23.06.2022",
      time: "16:03"
    },
    {
      patientId: 2,
      name: "Jane Smith",
      age: 50,
      complaint: "Knee Pain",
      date: "23.06.2022",
      time: "16:30"
    },
    {
      patientId: 3,
      name: "John Doe",
      age: 33,
      complaint: "Migraine",
      date: "23.06.2022",
      time: "17:01"
    },
    {
      patientId: 4,
      name: "Jane Doe",
      age: 29,
      complaint: "Lymphoma",
      date: "23.06.2022",
      time: "17:30"
    },
  ];

  return (
    <div className="recentpatients">
        <div className="recentpatienttitle">Upcoming Appointments</div>
        <TableContainer component={Paper} className = "table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Patient ID</TableCell>
            <TableCell className="tablecell">Name</TableCell>
            <TableCell className="tablecell">Age</TableCell>
            <TableCell className="tablecell">Complaint</TableCell>
            <TableCell className="tablecell">Date(dd.mm.yyyy)</TableCell>
            <TableCell className="tablecell">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.patientId}
            >
              <TableCell component="th" scope="row">
                {row.patientId}
              </TableCell>
              <TableCell className="tablecell">{row.name}</TableCell>
              <TableCell className="tablecell">{row.age}</TableCell>
              <TableCell className="tablecell">{row.complaint}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
  )
}
