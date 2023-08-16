import './App.css'
import Calendar from "./components/Calendar/Calendar";
import {useEffect, useState} from "react";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://calendar-api-app1-a76eb597fea0.herokuapp.com/api/v1/event?start_period=2023-08-17T00:00:00&end_period=2023-08-31T23:59:59")
        .then(d => d.json())
        .then(d => setEvents(d));
  }, [])

  return (
    <>
      <Calendar events={events}/>
    </>
  )
}

export default App
