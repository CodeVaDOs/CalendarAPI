import React from 'react';
import './MonthGrid.css'
import {daysInMonth, firstDayOfMonth, isMonthDayDate} from "../../utils/date";
import DayCell from "../DayCell/DayCell";

const MonthGrid = ({month, events}) => {
    const days = daysInMonth(month);
    const daysArray = Array.from({length: days}, (_, i) => i + 1)
    const dayToBeginTheMonthFrom = firstDayOfMonth(month);
    return (
        <>
            {daysArray.map((d, i) => {
                const dayEvents = events.filter(e => isMonthDayDate(d, month, e.dateStart))
                return (
                    <DayCell key={i}
                             day={d}
                             isColumnStart={i === 0}
                             columnStart={dayToBeginTheMonthFrom + 1}
                             dayEvents={dayEvents}/>
                )
            })}
        </>
    );
};

export default MonthGrid;