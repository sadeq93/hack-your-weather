import React from "react";
const Search = (props) => {
  return (
    <div>
      <label>
        City Name :
        <input onChange={props.changeName} />
      </label>
      <button onClick={props.fetchData}>Search</button>
    </div>
  );
};

export default Search;
