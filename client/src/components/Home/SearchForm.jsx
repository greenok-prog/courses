import React from "react";

function SearchForm({ setsearchVal, searchVal }) {
  return (
    <div className="search-form col-lg-5 d-flex justify-content-lg-end ">
      <div className="mt-lg-0 mt-sm-2">
        <img src="./search.svg" alt=""></img>
        <input
          value={searchVal}
          onChange={(e) => setsearchVal(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Поиск"
        ></input>
      </div>
    </div>
  );
}

export default SearchForm;
