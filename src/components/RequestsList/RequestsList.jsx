import React from 'react'
import classes from './RequestsList.module.scss'
import Card from '../Card/Card'
export default function RequestsList({reqs}) {
  return (
    <div className={classes.RequestsList}>
      {reqs.map((item, id)=>{
        return<Card key={id} data={item}/>
      })}
    </div>
  )
}
