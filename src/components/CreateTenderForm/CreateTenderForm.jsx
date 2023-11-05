import React from "react";
import classes from "./CreateTenderForm.module.scss";
import BlueButton from "../BlueButton/BlueButton";
export default function CreateTenderForm() {
  function createTender() {
    return;
  }
  return (
    // <form className={classes.CreateTenderForm}>
    //   <input type='text' id='title' name='title'/>
    //   <textarea id='description' name='description'></textarea>
    //   <input type='file' accept='.pdf'/>
    //   <BlueButton event={createTender} >Create</BlueButton>
    // </form>

    <section className={classes.cont}>
      <h2>Подача заявки на поправку тендера</h2>
      <form className={classes.CreateTenderForm}>
      
          <label htmlFor="">
            Тема поправки:
            <input type="text" placeholder="Купить красные книги" />
          </label>
          <label htmlFor="">
            Подробное описание:
            <input type="text" placeholder="Купить красные книги" />
          </label>
          <label htmlFor="">
            Номер телефона:
            <input type="text" placeholder="Купить красные книги" />
          </label>

          <label>
            Осталось до закупки:
            <input type="text" placeholder="12 xfc" />
          </label>
 
      </form>
    </section>
  );
}
