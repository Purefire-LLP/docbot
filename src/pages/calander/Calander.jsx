import React, { useState }from 'react'
import './calander.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import { getMonth } from './util'
import { CalendarHeader } from './calendarComponents/CalendarHeader'
import { CalendarSidebar } from './calendarComponents/CalendarSidebar'
import  { Month }  from './calendarComponents/Month'

export const Calander = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  return (
        <div className="calander">
          <Sidebar/>
          <div className="calanderContainer">
            <Navbar/>
            <div className="calendarMain">
            <div className="calendarHeaderContainer">
              <CalendarHeader/>
              <div className="calendarSidebarContainer">
                <CalendarSidebar/>
                <Month month={currentMonth}/>
              </div>
            </div>

            </div>
            </div>
          </div>

  )
}
