import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../components/Swiper/demo';
import RequestsList from '../components/RequestsList/RequestsList';
import TenderInfo from '../components/TenderInfo/TenderInfo';
import { Context } from '..';
import RequestForm from '../components/RequestForm/RequestForm';

export default function Tender() {
  const params = useParams()
  const {store} = useContext(Context)
  return (
    <div className='page' style={{display:"flex", alignItems:"start"}}>
      <TenderInfo info={data[params.id - 1]}/>
      {store.user.role==='goverment'?
      
      <RequestsList reqs={data[params.id - 1].requests}/>
    :<RequestForm/>}
    </div>
  )
}
