import Calendar from "react-calendar";
import React, { useEffect, useState } from "react";
import Tagesansicht from "../components/TagesAnsicht";
// import "react-calendar/dist/Calendar.css";

import * as eventProvider from '../service/eventProvider'

const Home = () => {

  // const [loggedIn, setLoggedIn] = useState(false);

  // const [eventDays, setEventDays] = useState([])
  // const [event, setEvents] = useState([])

  const [allEvents, setAllEvents] = useState([])
  const [dayEvents, setDayEvents] = useState([])

  const [value, onChange] = useState(new Date());
  const [test, setTest] = useState(false);


useEffect(()=> {
  const fetchData = async () => {
    const data = await eventProvider.getEventsByDay();
    setAllEvents(data)
  }
  fetchData()
    .catch(console.error);
},[])


useEffect(() => {
  let dayEvents = allEvents.filter((event) => {
      return new Date(event.beginning).toDateString() === value.toDateString();
  });
  setDayEvents(dayEvents)
},[value]);



  const popUpOpen = () => {
    setTest(true);
  };
  const popUpClose = () => {
    setTest(false);
  };


  return (
    <div>
      <h2>Kalender</h2>
      <div className="kalender">
        <Calendar onClickDay={popUpOpen} onChange={onChange} value={value} />
      </div>
      {test && (
        <div className="day">
          <Tagesansicht date={dayEvents} /><button onClick={popUpClose}>X</button>
        </div>
      )}
    </div>
  );
};

export default Home;
