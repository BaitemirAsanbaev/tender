import React, { useContext } from "react";
import { Context } from "..";

export default function Home() {
  const {store} = useContext(Context)
  return (
    <>
      <div>Home</div>
      <button onClick={store.logout}>Logout</button>
    </>
  );
}
