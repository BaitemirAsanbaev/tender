import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../components/Swiper/demo';
import RequestsList from '../components/RequestsList/RequestsList';

export default function Tender() {
  const params = useParams()
  console.log();
  return (
    <div>
      <RequestsList reqs={data[params.id - 1].requests}/>
    </div>
  )
}
