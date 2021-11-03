import React from "react";

function Card({ title, cost, desk }) {
  return (
    <div className="card p-1 shadow col-sm-4 m-4 flex-sm-grow-0 flex-md-grow-1">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-subtitle text-dark my-3">{desk}</div>
        <hr></hr>
        <div className="price p-2  rounded d-flex justify-content-between">
          <h4 className="old-price">40 000 </h4>
          <sup className="my-2">тг.</sup>
          <h4>{cost} </h4>
          <sup className="my-2">тг/мес.</sup>
        </div>
        <hr></hr>
        <div className="card-links d-flex justify-content-between">
          <button className="btn btn-outl more">Подробнее</button>
          <button className="btn btn-filled">Записаться</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
