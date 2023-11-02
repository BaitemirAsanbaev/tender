import React from 'react'
import classes from './BlueButton.module.scss'
export default function BlueButton({children, event}) {
  return (
    <button className={classes.BlueButton} onClick={(e)=>{event();e.preventDefault()}}>{children}</button>
  )
}
