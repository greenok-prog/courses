import React from "react";
import ModalWindow from "../Modal/ModalWindow";

function UnderHeader() {
  return (
    <div className="row ad align-items-center">
      <div className="col-sm-6 mb-3">
        <h2>Учитесь без ограничений</h2>
        <p className="subtitle">
          Развивайте навыки с помощью онлайн-курсов, сертификаций и дипломных{" "}
          <br />
          программ от лучших университетов и компаний мира.
        </p>
        <ModalWindow value="Консультация" />
      </div>

      <div className="col-sm-6 justify-content-center">
        <img className="img" src="/images/und.png" alt=""></img>
      </div>
    </div>
  );
}

export default UnderHeader;
