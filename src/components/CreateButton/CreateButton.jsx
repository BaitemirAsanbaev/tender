import React from 'react'
import classes from './CreateButton.module.scss'
export default function CreateButton({children}) {
  return (
    <button className={classes.CreateButton}>{children}</button>
  )
}
