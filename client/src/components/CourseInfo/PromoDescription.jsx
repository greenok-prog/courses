import React from "react";

function PromoDescription({ description }) {
  return (
    <div className="courseInfo_description">
      <p className="courseInfo_description-title">Описание</p>

      <p className="courseInfo_description-text">{description}</p>
    </div>
  );
}

export default PromoDescription;
