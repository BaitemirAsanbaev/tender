import React, { useContext } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { observer } from "mobx-react-lite";
import {Link} from 'react-router-dom'

import left from "../assets/imag/left.png";
import right from "../assets/imag/right.png";
import { Context } from "..";
import { useEffect } from "react";
import axios from "axios";
import { api } from "../api";

function Complaints() {
  const [complaints, setComplaints] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; 
  const data = [...complaints]; 
  const id = 1;
  useEffect(()=>{
    axios.get(api+"list/complaint").then((res)=>{
      setComplaints(res.data);
    })
  },[])
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="page">
          <div className="AllTenders">
      <div className="head">
        <div className="headBlock"> <p className="headH">Жалобы</p> </div>
      </div>
      <table className="tenderTable">
        <thead>
          <tr>
            <th>Author role</th>
            <th>Title</th>
            <th>Text</th>
            <th>Created time</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((tender, index) => (
            <tr key={index}>
              <td>{tender.author_role}</td>
              <td>{tender.title}</td>
              <td>${tender.text}</td>
              <td>{tender.created_time}</td>
            </tr> 
          ))}
        </tbody>
      </table>
      <div className="paginationDiv"> 
      <ReactPaginate
        className="pagination"
        previousLabel={<img src={left} alt="Previous" width="30px" height="30px"/>}
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
    </div>
    </div>
  );
}
export default observer(Complaints);
