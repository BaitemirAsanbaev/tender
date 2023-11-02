import React from "react";
import classes from './TenderInfo.module.scss'
export default function TenderInfo({ info }) {
  return (
    <div className={classes.TenderInfo}>
      <div className={classes.info}>
        <h2>{info.title}</h2>
        <span>{info.description}</span>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut distinctio quis asperiores dicta similique eligendi mollitia rem, iure atque hic incidunt blanditiis nesciunt velit harum reprehenderit porro provident pariatur facere iusto nemo fugiat commodi enim explicabo ex. Repudiandae esse, ratione saepe exercitationem ut voluptates illo autem numquam molestias repellat porro sequi modi, odit eius culpa aperiam laudantium. Quas, in totam voluptate dicta dolorem dolore provident vitae laborum harum laudantium? Officiis aliquam minus rerum vitae ab obcaecati libero sunt maiores illum voluptas delectus aut, asperiores quidem aperiam. Incidunt fuga iste, aut totam aliquam suscipit sed excepturi, impedit reprehenderit eaque sequi saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit cumque placeat repellendus laborum eveniet? Inventore cupiditate error accusamus placeat, sed doloribus esse magni natus. Voluptatibus excepturi velit quisquam voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, consectetur? Reprehenderit minus incidunt quidem, facere corrupti vitae itaque sint error quisquam et repellat quo, dolores repellendus. Labore id reprehenderit veniam deserunt non similique sequi, quasi, accusantium perspiciatis temporibus laudantium doloremque. Numquam, saepe iste quia illo suscipit soluta incidunt dolorum eveniet autem ducimus quod commodi. Maxime, distinctio, quidem consectetur recusandae ipsum vel amet mollitia assumenda sint molestiae adipisci reiciendis provident modi ab officia id voluptatem commodi, ea sapiente nostrum. In aut ipsa minima reiciendis commodi officia, labore accusamus placeat quidem explicabo fuga voluptate ea quisquam corporis qui illum laboriosam autem. Quis.</span>
      </div>
      <div className={classes.organization}>
        <div>
          <img src="https://mkk.gov.kg/wp-content/uploads/2021/09/c6113c6d-97b6-4ed7-97bc-fda2034700ec.jpg.630x410_q85_crop.jpg" alt="pfp" />
          <span>{info.gos_org}</span>
        </div>
        <div>
          <span>Бюджет: {info.budget}</span>
          <span>Открытие: {info.open_date}</span>
          <span>Закрытие: {info.close_date}</span>
        </div>
      </div>
    </div>
  );
}
