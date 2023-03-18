import EventErstellen from "../pages/EventErstellen";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/register", element: <Register />, id: 2 },
  { path: "/login", element: <Login />, id: 3 },
  { path: "/erstellen", element: <EventErstellen />, id: 4 }
];

export default routes;
