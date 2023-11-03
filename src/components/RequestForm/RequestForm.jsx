import React from 'react'
import BlueButton from '../BlueButton/BlueButton'
import classes from './RequestForm.module.scss'
export default function RequestForm() {
  function sendRequeset(){
    return
  }
  return (
    <form className={classes.RequestForm} method='POST' encType='multipart/form-data'>
      <label htmlFor="title">Тема</label>
      <input type='text' id='title' name='title'/>

      <label htmlFor="description">Описание</label>
      <textarea rows={10} type='text' id='description' name='description'/>
      
      <label htmlFor="request">Отклик</label>
      <input type='file' id='request' name='request' accept='.pdf'/>
      <BlueButton event={sendRequeset}>Отправить</BlueButton>
    </form>
  )
}
