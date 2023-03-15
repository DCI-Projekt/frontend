const EventErstellen = () => {
  // const { user, setUser } = useContext(UserContext);
  // const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const data = await axios.post("", user);
    //   if (data.data.msg) {
    //     setMessage(data.data.msg);
    //   }
    // } catch (error) {
    //   if (error.response.data.error) {
    //     setMessage(error.response.data.error.message);
    //   }
    // }
  };
  return (
    <div>
      <h2>Event Erstellen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventname"
          placeholder="Event Name"
          // onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <label>Datum</label>
        <input
          type="date"
          name="date"
          // onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>von</label>
        <input
          type="time"
          name="start"
          // onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>bis</label>
        <input
          type="time"
          name="end"
          // onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Veranstaltungsort</label>
        <input
          type="text"
          name="ort"
          placeholder="Adresse"
          // onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <textarea placeholder="Event Beschreibung" />
        <input className="register-button" type="submit" value="Erstellen" />
        {/* <p>{message}</p> */}
      </form>
    </div>
  );
}
 
export default EventErstellen;