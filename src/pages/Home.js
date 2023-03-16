import Calendar from "react-calendar";
import React, { useEffect, useState } from "react";
import Tagesansicht from "../components/TagesAnsicht";
// import "react-calendar/dist/Calendar.css";

const Home = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=> {
    if(loggedIn){ 
      try {
        
      } catch (error) {
        
      }
    }
  },[loggedIn])


  const [value, onChange] = useState(new Date());
  console.log("🚀 ~ file: Home.js:7 ~ Home ~ value:", value)
  const [test, setTest] = useState(false);

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
          <Tagesansicht date={value} /><button onClick={popUpClose}>X</button>
        </div>
      )}
    </div>
  );
};

export default Home;
