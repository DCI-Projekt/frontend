import Calendar from "react-calendar";
import React, { useEffect, useState } from "react";
import DayView from "../components/DayView";
// import "react-calendar/dist/Calendar.css";
import { useContext } from "react";
import { UserContext } from "../App";

import * as eventProvider from '../service/eventProvider'
import { userStatus } from '../service/checkStatus.js'
import { useLocation } from "react-router-dom";

const Home = () => {
  let location = useLocation();
  let status = useContext(UserContext)

  const [verifiedUser, setVerifiedUser] = useState(status.success)

  const [dateList, setDateList] = useState([]);
  const [allEvents, setAllEvents] = useState([])
  const [dayEvents, setDayEvents] = useState([])

  const [value, onChange] = useState(new Date());
  const [showDay, setShowDay] = useState(false)


  

  useEffect(()=> {

    console.log(location.state);



    const fetchStatus = async () => {
        let newStatus = await userStatus()
        console.log("🚀 ~ file: Home.js:36 ~ fetchStatus ~ newStatus:", newStatus)
        setVerifiedUser(newStatus.success)

    }
    fetchStatus()
        .catch(console.error);
  


    if (verifiedUser) {

    const fetchData = async () => {
        const data = await eventProvider.getAllEvents();
        setAllEvents(data)
  
        let eventDates = data.map(event => {
            let day = event.beginning.split('T')[0];
            let date = new Date(day);
            date.setDate(date.getDate() - 1)
            return date;
        });
        setDateList(eventDates)
    }
    fetchData()
        .catch(console.error);
    }

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
    setShowDay(true);
  };
  const popUpClose = () => {
    setShowDay(false);
  };

  let showDayView = (showDay)

  return (

    
    <div>
      <h2>Kalender</h2>
      <div className="kalender">
        <Calendar onClickDay={popUpOpen} tileContent={tileContent} onChange={onChange} value={value} />
      </div>
      {(showDayView && verifiedUser) && (
        <div className="day">
          <DayView date={dayEvents} /><button onClick={popUpClose}>X</button>
        </div>
      )}
    </div>
  );
};

export default Home;
