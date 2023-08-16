import React from 'react';
import './Calendar.css'
import MonthGrid from "../MonthGrid/MonthGrid";

const Calendar = ({events}) => {
    return (
        <div className="calendar">
            <MonthGrid month={7} events={events}/>
        </div>
    );
};

export default Calendar;