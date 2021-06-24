import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Use the search box to narrow
        your results or sort alphabetically by employee name.
      </p>
    </header>
  );
};

export default Header;