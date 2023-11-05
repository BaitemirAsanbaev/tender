import React, { useContext, useState } from "react";
import classes from "./CategorySearch.module.scss";
import BlueButton from "../BlueButton/BlueButton";
import { Link } from "react-router-dom";
import { tenders } from "../../store/tenders";
import { Context } from "../..";
export default function CategorySearch() {
  const [value, setValue] = useState('')
 
  const {store} = useContext(Context)
  
  const categories = [
    { title: "Строительство и ремонт", path: "stroitelstvo-i-remont" },
    { title: "Информационные технологии", path: "informatsionnye-tekhnologii" },
    { title: "Медицинское оборудование", path: "meditsinskoe-oborudovanie" },
    { title: "Транспорт и логистика", path: "transport-i-logistika" },
    {
      title: "Энергетика и электротехника",
      path: "energetika-i-elektrotekhnika",
    },
    {
      title: "Продукты питания и сельское хозяйство",
      path: "produkty-pitaniya-i-selskoe-khozyaystvo",
    },
    { title: "Образование и наука", path: "obrazovanie-i-nauka" },
    {
      title: "Мебель и оборудование офисов",
      path: "mebel-i-oborudovanie-ofisov",
    },
    {
      title: "Службы консалтинга и аудита",
      path: "sluzhby-konsaltinga-i-audita",
    },
    {
      title: "Охрана окружающей среды и санитария",
      path: "okhrana-okruzhayushchei-sredy-i-sanitariya",
    },
    {
      title: "Строительные материалы и оборудование",
      path: "stroitelnye-materialy-i-oborudovanie",
    },
    {
      title: "Медицинские услуги и фармацевтика",
      path: "meditsinskie-uslugi-i-farmatsevtika",
    },
  ];
  function searchByLetters(query, dataArray) {
    query = query.toLowerCase(); // Convert the query to lowercase for case-insensitive search
    return dataArray.filter((item) => {
      // Check if any field of the object contains the query
      for (const key in item) {
        if (typeof item[key] === "string" && item[key].toLowerCase().includes(query)) {
          return true; // Return the object if a match is found
        }
      }
      return false; // Return false if no match is found in any field
    });
  }
  
  function search() {
    store.setTenders(searchByLetters(value, tenders))
  }
  
  return (
    <div className={classes.CategorySearch}>
      <input
      value={value}
      onChange={(e)=>setValue(e.target.value)}
        placeholder="Что вам надо ?"
        type="text"
        name="search"
        id="search"
      />
      <div>
        <BlueButton event={search}>Найти</BlueButton>
      </div>
      <div>
        {categories.map((item, id) => {
          return (
            <Link key={id} to={item.path} className={classes.category}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
