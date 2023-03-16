import Calendar from "react-calendar";
import React, { useState } from "react";
// import "react-calendar/dist/Calendar.css";

const Home = () => {
  const [value, onChange] = useState(new Date());
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
          hi<button onClick={popUpClose}>X</button>
        </div>
      )}
    </div>
  );
};

export default Home;
