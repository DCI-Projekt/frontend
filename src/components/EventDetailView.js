import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEventById, attendToEvent } from "../service/eventProvider";


function EventDetailView() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [amountOfParticipants, setAmountOfParticipants] = useState("");

  useEffect(() => {
    (async function () {
      let event = await getEventById(id);
      console.log(event);

      setTitle(event.title);
      setDate(event.beginning);
      setStart(event.start)
      setDuration(event.duration);
      setDescription(event.description);
      setLocation(event.location);
      setAmountOfParticipants(event.participants.length);

    })();
  }, [id]);

  const handleAttendToEvent = async ()=>{
    let response = await attendToEvent(id);
    console.log("🚀 ~ file: EventDetailView.js:36 ~ handleAttendToEvent ~ response:", response)
  }

  return (
    <div className="detail-view">
      <h2>{title}</h2>
      <div className="details">
        <p>
          <span>Datum:</span>
          <span>
            {date.slice(8, 10)}.{date.slice(5, 7)}.
            {date.slice(0, 4)}
          </span>
        </p>
        <p>
          <span>Uhrzeit:</span>
          <span>{start} Uhr</span>
        </p>
        <p>
          <span>Dauer:</span>
          <span>ca. {duration} Stunden </span>
        </p>
        <p>
          Eventbeschreibung: <br />
          <br />
          {description}
        </p>
        <p>
          Veranstaltungsort:
          <br />
          <br />
          {location}
        </p>
        <p>
          <span>Teilnehmer:</span>
          <span>{amountOfParticipants}</span>
        </p>
        <button onClick={handleAttendToEvent} >Teilnehmen</button>
        <NavLink to="/">Zurück zum Kalender</NavLink>
      </div>
    </div>
  );
}

export default EventDetailView;
