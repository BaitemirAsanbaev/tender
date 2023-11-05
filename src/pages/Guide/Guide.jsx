import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../api";
import styles from "./Guide.module.scss";

const Guide = () => {
  const [guides, setGuides] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleGuideClick = (guide) => {
    setSelectedGuide(guide);
    setSelectedDoc(null); // Сбросить выбранный документ
  };

  useEffect(() => {
    axios.get(api + "list/guide").then((res) => {
      console.log(res.data);
      setGuides(res.data);
    });
  }, []);

  const doc = [
    {
      title: "Жалоба",
      content: "Это контент для Жалобы.",
    },
    {
      title: "Как оформить 2",
      content: "Это контент для Как оформить 2.",
    },
  ];

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
    setSelectedGuide(null); // Сбросить выбранный гайд
  };

  return (
    <div className={styles.Guide}>
      <h1>Часто задаваемые вопросы :</h1>
      <div className={styles.guide_list}>
        <ul>
          {guides.map((guide, index) => (
            <li key={index} onClick={() => handleGuideClick(guide)}>
              <h2>{guide.title}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.guide_details}>
        {selectedGuide && (
          <>
            <h2>{selectedGuide.title}</h2>
            <p>{selectedGuide.text}</p>
          </>
        )}
      </div>

      <h1>Как оформить:</h1>
      <div className="button-list">
        {doc.map((docs, index) => (
          <button key={index} onClick={() => handleDocClick(docs)}>
            {docs.title}
          </button>
        ))}
      </div>
      <div className="content">
        {selectedDoc && (
          <>
            <h2>{selectedDoc.title}</h2>
            <img width={400}
              src="https://www.lifewire.com/thmb/kW6qmOK-xA4wXMtPShm-RV9cJRI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chrome-save-as-pdf-7b631e4c76bb4eb5a7afd9b67e729f8d.png"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Guide;
