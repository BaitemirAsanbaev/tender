import React, { useContext } from "react";
import CreateButton from "../components/CreateButton/CreateButton";
import Swiper from "../components/Swiper/Swiper";
import { Context } from "..";
import { observer } from "mobx-react-lite";

function Tenders() {
  const { store } = useContext(Context);
  return (
    <div className="page">
      <button
        onClick={() => {
          store.setUser(
            store.user.role === "company"
              ? { role: "goverment" }
              : { role: "company" }
          );  
        }}
      >
        Switch
      </button>
      {store.user.role === "company" ? (
        <CreateButton>Открыть Тендер</CreateButton>
      ) : (
        <Swiper />
      )}
    </div>
  );
}
export default observer(Tenders)
