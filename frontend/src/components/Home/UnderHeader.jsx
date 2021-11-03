import React from "react";

function UnderHeader() {
  return (
    <div className="ad py-5 bg-blue">
      <div className="container-sm d-sm-flex align-items-center">
        <div className="">
          <h1>Большой выбор курсов</h1>
          <span>
            У нас можно освоить новую профессию онлайн и получить актуальные
            знания от признанных экспертов. Вас ждёт работа над реальными
            проектами, закрытые мастер-классы и полезные знакомства.
          </span>
        </div>
        <div className="mx-5 text-dark d-flex align-items-center justify-content-center">
          <img src="../Design/Icons/an8spigo-desktop-webp.webp" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default UnderHeader;
