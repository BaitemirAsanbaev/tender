import React, { useContext } from "react";
import { Context } from "..";
import CategorySearch from "../components/CategorySearch/CategorySearch";
import AllTenders from "../components/AllTenders/AllTenders";
import News from "./News/News";

export default function Home() {
  const { store } = useContext(Context);
  return (
    <div className="page">
      <News />
      <CategorySearch />
      <AllTenders />
      <button onClick={store.logout}>Logout</button>
    </div>
  );
}
