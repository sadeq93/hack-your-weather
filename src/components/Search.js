import React from "react";
const Search = (props) => {
  return (
    <div>
      <input
        value={props.cityName}
        onChange={props.changeName}
        placeholder="City Name"
      />
      <button
        onClick={props.fetchData}
        disabled={props.cityName === "" ? true : false}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
