import React, { useContext } from "react";
import { Context } from "..";
import CategorySearch from "../components/CategorySearch/CategorySearch";

export default function Home() {
  const {store} = useContext(Context)
  return (
    <>
      <div>Home</div>
      <CategorySearch/>
      <button onClick={store.logout}>Logout</button>
    </>
  );
}
