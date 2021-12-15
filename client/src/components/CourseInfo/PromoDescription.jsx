import React from "react";

function PromoDescription({ list }) {
  return (
    <div className="courseInfo_description">
      <p className="courseInfo_description-title">Описание</p>
      {list.map((el, index) => (
        <p className="courseInfo_description-text" key={index}>
          {el}
        </p>
      ))}
    </div>
  );
}

export default PromoDescription;
