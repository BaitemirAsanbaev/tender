import React from 'react'
import classes from './CreateTenderForm.module.scss'
import BlueButton from '../BlueButton/BlueButton'
export default function CreateTenderForm() {
  function createTender(){
    return
  }
  return (
    <form className={classes.CreateTenderForm}>
      <input type='text' id='title' name='title'/>
      <textarea id='description' name='description'></textarea>
      <input type='file' accept='.pdf'/>
      <BlueButton event={createTender} >Create</BlueButton>
    </form>
  )
}
