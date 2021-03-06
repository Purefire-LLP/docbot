import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from"../../components/userdata"
import { Link } from "react-router-dom";

export const Datatable = () => {
  const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell:()=>{
    return(
      <div className="cellAction">
        <div className="viewButton">View</div>
        <div className="deleteButton">Delete</div>
      </div>
    )

  }}]
  return (
    <div className="datatable">
        <div className="datatitle">
          <h2 className="title">Employees</h2>
          <Link to="/users/new" style={{textDecoration: "none"}} className="link">+Add New</Link>
          </div>
        <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}
