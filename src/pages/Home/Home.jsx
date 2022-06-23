// import React from 'react'
import "./home.scss"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"

export const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          {/* /* widgets on the top of the dashboard*/ }
          <div className="widgets">
            <Widget type="patients"/>
            <Widget type="reports"/>
            <Widget type="consultations"/>
            <Widget type="experience"/>
          </div>
          <div className="charts">
            <Chart/>
            <Progress/>
          </div>
          <div className="listcontainer">
            <Recentpatients/>
            <Recentnotif/>
          </div>
        </div>
    </div>
  )
}
