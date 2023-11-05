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
import Risks from "./pages/Risks/Risks";
import Profile from "./pages/Profile/Profile";
import {RedirectHome} from "./pages/Redirect";
import {RedirectLogin} from "./pages/Redirect";
import Guide from "./pages/Guide/Guide";
import Jalob from "./pages/Raitings/Jalob/Jalob";
import Ministr from "./pages/Raitings/Jalob/Ministr";
import Budget from "./pages/Raitings/Jalob/Budget";
import Zakup from "./pages/Raitings/Jalob/Zakup";
import Postav from "./pages/Raitings/Jalob/Postav";
import PostavRisks from "./pages/Risks/PostavRisks";
import Plans from "./pages/Plans/Plans";

function App() {
  return (
    <div className="App">
      {!localStorage.getItem("access") ? (
        <>
          <Nav />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="*" element={<RedirectHome />} />
            <Route path="/plans" element={<Plans   />} />
            <Route path="/risks/zakup/" element={<Risks/>} />
            <Route path="/risks/postav/" element={<PostavRisks/>} />
            <Route path='/rate/jalob/' element={<Jalob  />}/>
            <Route path='/rate/ministr/' element={<Ministr  />}/>
            <Route path='/rate/budget/' element={<Budget  />}/>
            <Route path='/rate/zakup/' element={<Zakup  />}/>
            <Route path='/rate/postav/' element={<Postav  />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/guide" element={<Guide />} />

            <Route path="/tender/:id" element={<Tender />} />
            <Route path="/rate/tender/:id" element={<Tender />} />
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
