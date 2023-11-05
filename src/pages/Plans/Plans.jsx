import React from 'react'
import classes from './Plans.module.scss'
import AllTenders from '../../components/AllTenders/AllTenders'
import { useContext } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import {Link} from 'react-router-dom'

import left from "../../assets/imag/left.png";
import right from "../../assets/imag/right.png";


function Plans() {
  const { store } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; 
  const data = [...store.tenders]; 
  const id = 1;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);


  const name = 'Рейтинг тендеров'
  const jal = '4,3'

  return (
    <div className={classes.wrap}>
      <div className="AllTenders">
      <div className="head">
        <div className="headBlock"> <p className="headH">Планируемые тендеры</p> </div>
      </div>
      <table className="tenderTable">
        <thead>
          <tr>
            <th>Номер тендера</th>
            <th>Наименование тендера</th>
            <th>Наименование организации</th>
            <th>Планируемая сумма</th>
            <th>Дата публикации</th>
            <th>Срок подачи</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((tender, index) => (
            <tr key={index}>
              <td>{tender.number}</td>
              <td><Link to={`/tender/1/`}>{tender.name_of_purchase}</Link></td>
              <td>{tender.procuring_organization}</td>
              <td>{tender.planned_amount} сом</td>
              <td>{tender.publish_date}</td>
              <td>{tender.deadline_for_submission}</td>
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
  )
}

export default Plans