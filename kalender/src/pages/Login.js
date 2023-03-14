import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [userLogin, setUserLogin] = useState({
      email: "",
      password: "",
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "",
          userLogin
        );
        console.log(data);
        localStorage.setItem("token", data.data.token);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <input className="login-button" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
