import React from 'react'
import BlueButton from '../components/BlueButton/BlueButton'
export default function CreateTender() {
  function createTender(){
    return
  }
  return (
    <form>
      <input type='text' id='title' name='title'/>
      <textarea id='description' name='description'></textarea>
      <BlueButton event={createTender} >Create</BlueButton>
    </form>
  )
}
