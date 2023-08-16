import React from 'react';
import './DayCell.css'

const DayCell = ({columnStart, isColumnStart, day, dayEvents}) => {
    const style = {gridColumnStart: columnStart}
    return (
        <div className="cell" style={isColumnStart ? style : {}}>
            {day}
            <ul>
                {dayEvents.map(d => <li>{d.title}</li>)}
            </ul>
        </div>
    );
};

export default DayCell;