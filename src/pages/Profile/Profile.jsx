import React from 'react';
import classes from "./Profile.module.scss"


const Profile = () => {
  
  const user = {
    'name':'User name',
    'surname':'User surname',
    'patronymic':'User patronymic',
    'sex':'male',
    'nationaly':'KYRGYZ',
    'birthday':'2222222',
    'expiry':'1273018238',
    'place':'talas talas',
    'issue':'13/23/23',
    'inn':'2100000247',
  }
  

  return (
      <div className={classes.wrap}>
        <div className={classes.head}>
          <div className={classes.headBlock}>
            <p>Профиль</p>
          </div>
        </div> 
        <div className={classes.profil}>
          <div className={classes.table}>
            <div className={classes.tb}>
              <p>Имя</p>
              <p>{user.name}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Фамилия</p>
              <p>{user.surname}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Отчество</p>
              <p>{user.patronymic}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Пол</p>
              <p>{user.sex}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Национальность</p>
              <p>{user.nationaly}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Дата рождения</p>
              <p>{user.birthday}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Место рождения</p>
              <p>{user.place}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>ИНН</p>
              <p>{user.inn}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Дата выдачи паспорта</p>
              <p>{user.issue}</p>
            </div>
            <hr />
            <div className={classes.tb}>
              <p>Дата окончания паспорта</p>
              <p>{user.expiry}</p>
            </div>
          </div>

        </div>
        <button onClick={()=>localStorage.clear()}> Logout</button>

      </div>
  );
};

export default Profile;
