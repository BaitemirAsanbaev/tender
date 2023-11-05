import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const  RedirectHome = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/')
  })
  return (
    <></>
  )
}


export const  RedirectLogin = () =>  {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/login')
  })
  return (
    <></>
  )
}
