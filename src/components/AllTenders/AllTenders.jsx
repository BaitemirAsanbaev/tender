import React, { useContext } from "react";
import classes from "./AllTenders.scss";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

import left from "../../assets/imag/left.png";
import right from "../../assets/imag/right.png";

function AllTenders() {
  const { store } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Number of items to display per page
  const data = [...store.tenders]; // Your data array to be paginated

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="AllTenders">
      <table className="tenderTable">
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
        className="pagination"
        previousLabel={<img src={left} alt="Previous" />}
        nextLabel={<img src={right} alt="Next" />}
        breakLabel={"..."}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
export default observer(AllTenders);
