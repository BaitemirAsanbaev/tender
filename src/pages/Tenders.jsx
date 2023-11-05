import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import BlueButton from "../components/BlueButton/BlueButton";
import axios from "axios";
import { api } from "../api";

function Tenders() {
  const [name, setName] = useState("");
  function getTenders() {
    axios.get(api + "parse/tenders", {});
  }
  return (
    <div className="page">
      <label>Кто тебя обидел?</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
        name="name"
      />
      <BlueButton event={getTenders}>Get tenders from this mf</BlueButton>
    </div>
  );
}
export default observer(Tenders);
