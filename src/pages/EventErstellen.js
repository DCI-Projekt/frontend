import axios from "axios";
import { useState } from "react";

const EventErstellen = () => {

    const [title, setTitle] = useState("");
    const [beginning, setBeginning] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
 
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let jetzt = new Date(`1995-12-17T${start}:00`).getTime()
    let später = new Date(`1995-12-17T${end}:00`).getTime()

    let dauer = später-jetzt


    let newEvent = {
      title: title,
      beginning: beginning,
      duration: new Date(dauer).getHours(),
      location: location,
      description: description
    }
      console.log("🚀 ~ file: EventErstellen.js:30 ~ handleSubmit ~ beginning:", beginning)


    try {

      let response = await axios.post('http://localhost:8080/protected/events', newEvent, {
        withCredentials: true
      })
      
      console.log(response);
      
    } catch (error) {
      console.log("🚀 ~ file: EventErstellen.js:43 ~ handleSubmit ~ error:", error)
      
    }


  };
  return (
    <div>
      <h2>Event Erstellen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventname"
          placeholder="Event Name"
          onChange={(e) => setTitle( e.target.value )}
        />
        <label>Datum</label>
        <input
          type="date"
          name="date"
          onChange={(e) => setBeginning( e.target.value )}
        />
        <label>von</label>
        <input
          type="time"
          name="start"
          onChange={(e) => setStart( e.target.value )}
        />
        <label>bis</label>
        <input
          type="time"
          name="end"
          onChange={(e) => setEnd( e.target.value )}
        />
        <label>Veranstaltungsort</label>
        <input
          type="text"
          name="ort"
          placeholder="Adresse"
          onChange={(e) => setLocation( e.target.value )}
        />
        <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Event Beschreibung" />
        <input className="register-button" type="submit" value="Erstellen" />
        <p>{message}</p>
      </form>
    </div>
  );
}
 
export default EventErstellen;