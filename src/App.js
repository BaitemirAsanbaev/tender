import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tenders from "./pages/Tenders";
import Nav from "./components/Nav/Nav";
import Tender from "./pages/Tender";
import CreateTender from "./pages/CreateTender";
import WebcamCapture from "./pages/WebcamCapture";
import Complaints from "./pages/Complaints";
import CreateComplaint from "./pages/CreateComplaint";
import Raiting from "./pages/Raitings/Raiting";
import Profile from "./pages/Profile/Profile";
import {RedirectHome} from "./pages/Redirect";
import {RedirectLogin} from "./pages/Redirect";
import Guide from "./pages/Guide/Guide";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("access") ? (
        <>
          <Nav />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="*" element={<RedirectHome />} />
            <Route path="/rate" element={<Raiting />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/guide" element={<Guide />} />

            <Route path="/tender/:id" element={<Tender />} />
            <Route path="/tender/create" element={<CreateTender />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/complaints/create" element={<CreateComplaint />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="*" where="/login" element={<RedirectLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/scanner" element={<WebcamCapture />} />
          <Route path="/register" index element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
