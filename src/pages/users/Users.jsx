import React from 'react'
import "./users.scss"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import { Datatable } from "../../components/datatable/Datatable"

export const Users = () => {
  return (
    <div className="users">
        <Sidebar/>
        <div className="usercontainer">
          <Navbar/>
          <Datatable/>
        </div>
    </div>
  )
}
