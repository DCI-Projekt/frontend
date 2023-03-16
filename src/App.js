import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./components/routes";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route) => {
              return <Route key={route.id} {...route} />;
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
