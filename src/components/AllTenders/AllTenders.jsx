import React from "react";
import { tenders } from "../../store/tenders";
import classes from "./AllTenders.module.scss";
export default function AllTenders() {
  return (
    <div className={classes.AllTenders}>
       <table className={classes.tenderTable}>
    <thead>
      <tr>
        <th>Tender Number</th>
        <th>Name of Purchase</th>
        <th>Procuring Organization</th>
        <th>Planned Amount</th>
        <th>Publish Date</th>
        <th>Deadline for Submission</th>
      </tr>
    </thead>
    <tbody>
      {tenders.map((tender, index) => (
        <tr key={index}>
          <td>{tender.number}</td>
          <td>{tender.name_of_purchase}</td>
          <td>{tender.procuring_organization}</td>
          <td>${tender.planned_amount}</td>
          <td>{tender.publish_date}</td>
          <td>{tender.deadline_for_submission}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  );
}
