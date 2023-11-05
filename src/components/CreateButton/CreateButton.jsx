import React from "react";
import classes from "./CreateButton.module.scss";
import { Link } from "react-router-dom";
export default function CreateButton({ children }) {
  return (
    <Link to={"tender/create/"} className={classes.CreateButton}>
      {children}
    </Link>
  );
}
