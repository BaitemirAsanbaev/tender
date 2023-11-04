import React, { useContext } from "react";
import classes from "./AllTenders.module.scss";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
function AllTenders() {
  const {store } = useContext(Context)
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items to display per page
  const data = [...store.tenders]; // Your data array to be paginated

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

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
          {currentPageData.map((tender, index) => (
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
      <ReactPaginate
      className={classes.pagination}
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
export default observer(AllTenders)