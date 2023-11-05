import React from 'react'
import classes from '../Raitings.module.scss'
import { useContext } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import {Link} from 'react-router-dom'

import left from "../../../assets/imag/left.png";
import right from "../../../assets/imag/right.png";

function Budget() {            

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
  const jal = '125'

  return (
    <div className={classes.wrap}>
      <div className={classes.choose}>
        <div><Link to="/rate/ministr/">по Министерствам</Link></div>
        <div><Link to="/rate/zakup/">по Закуп. организациям</Link></div>
        <div><Link to="/rate/postav/">по Поставщикам</Link></div>
        <div ><Link to='/rate/jalob'>по Жалобам</Link></div>
        <div className={classes.active}><Link to="/rate/budget/">по Бюджету</Link></div>
      </div>
      <div className="AllTenders">
    <div className="head">
      <div className="headBlock"> <p className="headH">Рейтинг</p> </div>
    </div>
    <table className="tenderTable">
      <thead>
        <tr>
          <th>Номер тендера</th>
          <th>Наименование тендера</th>
          <th>Наименование организации</th>
          <th>Планируемая сумма</th>
          <th>Срок подачи</th>
          <th>Жалобы</th>
        </tr>     
      </thead>
      <tbody>
        {currentPageData.map((tender, index) => (
          <tr key={index}>
            <td>{tender.number}</td>
            <td><Link to={`tender/${id}`}>{tender.name_of_purchase}</Link></td>
            <td>{tender.procuring_organization}</td>
            <td className={classes.red}>{tender.planned_amount} сом</td>
            <td>{tender.deadline_for_submission}</td>
            <td className={classes.red}>{jal}</td>
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
  </div></div>
  )
}

export default Budget