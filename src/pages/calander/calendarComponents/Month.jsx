import React from 'react'
import  { Day }  from './Day'
import './months.scss'

export const Month = ({month}) => {
  return (
    <div className='monthContainer'>
         {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, idx) =>(
                    <Day day={day} key={idx} rowIdx={i}/>
         ))}
            </React.Fragment>
        ))}
    </div>
  )
}

