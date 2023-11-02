import React from 'react'
import { Link } from 'react-router-dom'
export default function Slide({data}) {
  return (
    <Link  to={`/tender/${data.id}`}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>{data.participants}</span>
    </Link>
  )
}
