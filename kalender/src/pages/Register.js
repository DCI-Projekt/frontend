// import { useContext, useState } from "react";
// import UserContext from "../context/UserContext";
// import axios from "axios";

const Register = () => {
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
      <h2>Account erstellen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Benutzername"
          // onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          // onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          // onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input className="register-button" type="submit" value="Registrieren" />
        {/* <p>{message}</p> */}
      </form>
    </div>
  );
};

export default Register;
