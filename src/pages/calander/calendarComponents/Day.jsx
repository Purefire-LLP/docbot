import dayjs from "dayjs"
import React from "react"
import './day.scss'


export const Day = ({day, rowIdx}) => {
  return (
    <div className="dayContainer">
      <header className="dayHeader">
        {rowIdx === 0 && <p className="monthDisplay">
          {day.format('ddd').toUpperCase()}
        </p>}

        <p className={"dayDisplay"}>
          {day.format('DD')}
        </p>
      </header>

    </div>
  )
}

