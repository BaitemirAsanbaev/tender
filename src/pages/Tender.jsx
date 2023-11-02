import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../components/Swiper/demo';
import RequestsList from '../components/RequestsList/RequestsList';
import TenderInfo from '../components/TenderInfo/TenderInfo';

export default function Tender() {
  const params = useParams()
  return (
    <div className='page' style={{display:"flex"}}>
      <TenderInfo info={data[params.id - 1]}/>
      <RequestsList reqs={data[params.id - 1].requests}/>
    </div>
  )
}
