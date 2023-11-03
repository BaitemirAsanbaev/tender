import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Redirect from "./pages/Redirect";
import Tenders from "./pages/Tenders";
import Nav from "./components/Nav/Nav";
import Tender from "./pages/Tender";
import CreateTender from "./pages/CreateTender";

function App() {
  return (
    <div className="App">
      {!localStorage.getItem("token") ? (
        <>
          <Nav/>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/tender/:id" element={<Tender />} />
            <Route path="/tender/create" element={<CreateTender />} />
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
