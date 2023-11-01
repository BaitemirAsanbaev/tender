import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("token") ? (
        <>
          <Nav />
          <Routes>
            <Route path="/" index element={<Home />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Redirect/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" index element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
