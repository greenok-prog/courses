import React from "react";

function TrendList({ trends, selectSort, selectedSort, selectAll }) {
  return (
    <div className="types col-lg-7">
      <button
        onClick={() => selectAll("")}
        className={`btn  trend outline mb-2 ${
          selectedSort === "" ? "trend-active" : ""
        }`}
      >
        Все направления
      </button>
      {trends.map((trend, index) => (
        <button
          onClick={() => selectSort(trend.type)}
          key={trend.type}
          className={`btn trend outline mb-2 ${
            selectedSort === trend.type ? "trend-active" : ""
          }`}
        >
          {trend.name}
        </button>
      ))}
    </div>
  );
}

export default TrendList;
