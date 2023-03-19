import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEventById } from "../service/eventProvider";

function EventDetailView() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [beginning, setBeginning] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [participants, setParticipants] = useState([]);
  const [amountOfParticipants, setAmountOfParticipants] = useState("");

  useEffect(() => {
    (async function () {
      let event = await getEventById(id);
      console.log(event);

      setTitle(event.title);
      setBeginning(event.beginning);
      setDuration(event.duration);
      setDescription(event.description);
      setLocation(event.location);
      setParticipants(event.participants);
      setAmountOfParticipants(event.participants.length);
    })();
  }, [id]);

  return (
    <div className="detail-view">
      <h2>{title}</h2>
      <div className="details">
        <p>
          <span>Datum:</span>
          <span>
            {beginning.slice(8, 10)}.{beginning.slice(5, 7)}.
            {beginning.slice(0, 4)}
          </span>
        </p>
        <p>
          <span>Dauer:</span>
          <span>{duration}h</span>
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
        <button>Teilnehmen</button>
        <NavLink to="/">Zurück zum Kalender</NavLink>
      </div>
    </div>
  );
}

export default EventDetailView;
