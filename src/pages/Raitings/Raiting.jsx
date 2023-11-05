import React from 'react'
import classes from './Raitings.module.scss'
import AllTenders from '../../components/AllTenders/AllTenders'
import { useContext } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import {Link, Route, Routes} from 'react-router-dom'

import Jalob from './Jalob/Jalob';


function Raiting() {

  return (
    <div className={classes.wrap}>
      
      <Routes>
      </Routes>
    </div>
  )
}

export default Raiting