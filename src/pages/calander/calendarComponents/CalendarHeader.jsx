import React from 'react'
import './calendarHeader.scss'
import logo from '../../../assets/logo.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const CalendarHeader = () => {
  return (
    <header className="calendarHeader">
      <img src={logo} alt="calendarLogo" className='calendarLogo'/>
      <h1 className='calendarHeaderText'>Calendar</h1>
      <button className="calendarHeaderButton">
        Today
      </button>
      <button className='iconButtons'>
        <span className='calendarIcons'>
          <ChevronLeftIcon/>
        </span>
      </button>
      <button className='iconButtons'>
        <span className='calendarIcons'>
          <ChevronRightIcon/>
        </span>
      </button>
    </header>
  )
}
