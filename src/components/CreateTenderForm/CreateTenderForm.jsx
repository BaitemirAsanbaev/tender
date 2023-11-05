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
            <input type="text" placeholder="Купить книги" />
          </label>
          <label htmlFor="">
            Подробное описание:
            <input type="text" placeholder="Купить красные книги автора Пушкина" />
          </label>
          <label htmlFor="">
            Номер телефона:
            <input type="text" placeholder="0 999 99 99 99" />
          </label>

          <label>
            Осталось до публикации:
            <input type="text" placeholder="12 дней" />
          </label>
          <button type="submit" className={classes.btn}>Отправить</button>
      </form>
    </section>
  );
}
