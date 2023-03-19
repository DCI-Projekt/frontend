import { useNavigate } from "react-router-dom";

function DayView({ events }) {
  console.log("🚀 ~ file: TagesAnsicht.js:4 ~ Tagesansicht ~ date:", events);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/events/${id}`, {});
  };

  let temp = events.map((event) => {
      return (
        <a key={event._id} onClick={() => handleClick(event._id)}>
          <h3 className="event-title">{event.title} {event.start}</h3>
        </a>
      );
  });

  const termine = ()=>{
    if (temp.length === 0) {
      return <p>keine Termine</p>;
    } else {
        return temp
    }
  }

  return <>{termine()}</>;
}

export default DayView;
