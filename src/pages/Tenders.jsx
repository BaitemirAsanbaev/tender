import React from 'react'
import CreateButton from '../components/CreateButton/CreateButton'
import Swiper from '../components/Swiper/Swiper'

export default function Tenders() {
  return (
    <div className='page'>
      <CreateButton>Открыть Тендер</CreateButton>
      <Swiper/>
    </div>
  )
}
