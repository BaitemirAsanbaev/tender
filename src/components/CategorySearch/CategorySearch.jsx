import React, { useState } from "react";
import classes from "./CategorySearch.module.scss";
import BlueButton from "../BlueButton/BlueButton";
import { Link, useNavigate } from "react-router-dom";
export default function CategorySearch() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const tenders = [
    {
      "number": "T12345",
      "name_of_purchase": "Office Supplies",
      "procuring_organization": "ABC Corporation",
      "procurement_format": "Online Bidding",
      "procurement_method": "Competitive Bidding",
      "planned_amount": "25000",
      "publish_date": "2023-11-04",
      "deadline_for_submission": "2023-11-20",
      "validity_period_for_supplier_offers": "2023-12-05",
      "suppliers_offer_guarantee": "1500",
      "official_information": "Please refer to the attached documents",
      "instructions_for_preparing": "Follow the instructions in the RFP document",
      "name_of_company": "XYZ Suppliers Inc.",
      "actual_address": "123 Main Street, Cityville, State",
      "work_phone": "123-456-7890",
      "remaining_until_purchase": "20 days",
      "complaints_quantity": 2
    },
    {
      "number": "T54321",
      "name_of_purchase": "Construction Materials",
      "procuring_organization": "City Public Works Department",
      "procurement_format": "Public Tender",
      "procurement_method": "Open Bidding",
      "planned_amount": "75000",
      "publish_date": "2023-11-06",
      "deadline_for_submission": "2023-11-25",
      "validity_period_for_supplier_offers": "2023-12-10",
      "suppliers_offer_guarantee": "3000",
      "official_information": "Refer to the specifications and drawings",
      "instructions_for_preparing": "Follow the bid submission guidelines",
      "name_of_company": "ABC Construction Ltd.",
      "actual_address": "456 Oak Avenue, Townsville, State",
      "work_phone": "987-654-3210",
      "remaining_until_purchase": "19 days",
      "complaints_quantity": 1
    },
    {
      "number": "T98765",
      "name_of_purchase": "IT Services",
      "procuring_organization": "Tech Solutions Inc.",
      "procurement_format": "Request for Proposal",
      "procurement_method": "Selective Bidding",
      "planned_amount": "45000",
      "publish_date": "2023-11-07",
      "deadline_for_submission": "2023-11-22",
      "validity_period_for_supplier_offers": "2023-12-03",
      "suppliers_offer_guarantee": "2000",
      "official_information": "Refer to the RFP document for details",
      "instructions_for_preparing": "Submit your proposal as per the RFP guidelines",
      "name_of_company": "Innovate IT Solutions",
      "actual_address": "789 Elm Street, Techville, State",
      "work_phone": "555-123-4567",
      "remaining_until_purchase": "15 days",
      "complaints_quantity": 0
    },
    {
      "number": "T13579",
      "name_of_purchase": "Medical Equipment",
      "procuring_organization": "City Hospital",
      "procurement_format": "Competitive Negotiation",
      "procurement_method": "Direct Negotiation",
      "planned_amount": "90000",
      "publish_date": "2023-11-10",
      "deadline_for_submission": "2023-11-30",
      "validity_period_for_supplier_offers": "2023-12-15",
      "suppliers_offer_guarantee": "5000",
      "official_information": "Medical equipment specifications available on request",
      "instructions_for_preparing": "Submit your proposal with relevant credentials",
      "name_of_company": "MediTech Supplies",
      "actual_address": "321 Hospital Drive, Health City, State",
      "work_phone": "888-999-1234",
      "remaining_until_purchase": "20 days",
      "complaints_quantity": 3
    }
  ];
  
  
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
          return <div className="tender-card">
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
