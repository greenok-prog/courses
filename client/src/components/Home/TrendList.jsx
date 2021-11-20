import React from "react";

function TrendList({ trends, selectSort, selectedSort, selectAll }) {
  return (
    <div className="types col-lg-7">
      <button
        onClick={() => selectAll("")}
        className={`btn outline mb-2 ${
          selectedSort === "" ? "btn-active" : ""
        }`}
      >
        Все направления
      </button>
      {trends.map((trend, index) => (
        <button
          onClick={() => selectSort(trend.type)}
          key={trend.type}
          className={`btn outline mb-2 ${
            selectedSort === trend.type ? "btn-active" : ""
          }`}
        >
          {trend.name}
        </button>
      ))}
    </div>
  );
}

export default TrendList;
