import React from "react";
import "./style.css";

const SearchBar = (props) => {

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2">
        <input
          className="form-control"
          value={props.value}
          onChange={props.inputChange}
          name="search"
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default SearchBar;