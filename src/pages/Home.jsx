import React, { useContext } from "react";
import { Context } from "..";
import CategorySearch from "../components/CategorySearch/CategorySearch";
import AllTenders from "../components/AllTenders/AllTenders";

export default function Home() {
  const {store} = useContext(Context)
  return (
    <div className="page">
      <div>Home</div>
      <CategorySearch/>
      <AllTenders/>
      <button onClick={store.logout}>Logout</button>
    </div>
  );
}
