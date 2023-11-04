import React, { useState } from "react";
import classes from "./CategorySearch.module.scss";
import BlueButton from "../BlueButton/BlueButton";
import { Link } from "react-router-dom";
import { tenders } from "../../store/tenders";
export default function CategorySearch() {
  const [value, setValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
 
  
  
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
    setSearchResult(searchByLetters(value, tenders))
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
        {categories.map((item) => {
          return (
            <Link to={item.path} className={classes.category}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div>
        {searchResult.map((tender, id)=>{
          return <div key={id}>
          <h3>Tender Information</h3>
          <ul>
            <li>
              <strong>Tender Number:</strong> {tender.number}
            </li>
            <li>
              <strong>Name of Purchase:</strong> {tender.name_of_purchase}
            </li>
            <li>
              <strong>Procuring Organization:</strong> {tender.procuring_organization}
            </li>
            <li>
              <strong>Planned Amount:</strong> ${tender.planned_amount}
            </li>
            <li>
              <strong>Publish Date:</strong> {tender.publish_date}
            </li>
            <li>
              <strong>Deadline for Submission:</strong> {tender.deadline_for_submission}
            </li>
          </ul>
        </div>
        })}
      </div>
    </div>
  );
}
