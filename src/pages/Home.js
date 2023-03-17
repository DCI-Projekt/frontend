import Calendar from "react-calendar";
import React, { useEffect, useState } from "react";
import DayView from "../components/DayView";
// import "react-calendar/dist/Calendar.css";

import * as eventProvider from '../service/eventProvider'

const Home = () => {

const [dateList, setDateList] = useState([]);


// const [loggedIn, setLoggedIn] = useState(false);

// const [eventDays, setEventDays] = useState([])
// const [event, setEvents] = useState([])

const [allEvents, setAllEvents] = useState([])
const [dayEvents, setDayEvents] = useState([])

const [value, onChange] = useState(new Date());
const [test, setTest] = useState(false);

useEffect(()=> {
  const fetchData = async () => {
    const data = await eventProvider.getAllEvents();
    setAllEvents(data)

    let eventDates = data.map(event => {
        let day = event.beginning.split('T')[0];
        let date = new Date(day);
        date.setDate(date.getDate() - 1)
        return date;
    }) 
    setDateList(eventDates)
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

const tileContent = ({ date, view }) => {
    if (view === 'month') {
        const dateString = date.toISOString().split('T')[0];
        const isMarked = dateList.find((d) => d.toISOString().split('T')[0] === dateString);
        return isMarked ? <div className="marked">{""}</div> : null;
    }
    return null;
};

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
        <Calendar onClickDay={popUpOpen} tileContent={tileContent} onChange={onChange} value={value} />
      </div>
      {test && (
        <div className="day">
          <DayView date={dayEvents} /><button onClick={popUpClose}>X</button>
        </div>
      )}
    </div>
  );
};

export default Home;
