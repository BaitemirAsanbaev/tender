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
import WebcamCapture from "./pages/WebcamCapture";
import Complaints from "./pages/Complaints";
import CreateComplaint from "./pages/CreateComplaint";
import Raiting from "./pages/Raitings/Raiting";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("access") ? (
        <>
          <Nav />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/scanner" element={<WebcamCapture />} />
            <Route path="/rate" element={<Raiting />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/tender/:id" element={<Tender />} />
            <Route path="/tender/create" element={<CreateTender />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/complaints/create" element={<CreateComplaint />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Redirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" index element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
