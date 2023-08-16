function daysInMonth(month) {
    const year = new Date().getFullYear();
    const d = new Date(year, month + 1, 0);
    return d.getDate();
}

function firstDayOfMonth(month) {
    const year = new Date().getFullYear();
    const d = new Date(year, month, 1);
    return d.getDay();
}

function isMonthDayDate(day, month, date) {
    const d = new Date(date);
    return d.getMonth() === month && d.getDate() === day;
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export { daysInMonth, firstDayOfMonth, isMonthDayDate, months };
