import React from "react";

const Filter = ({ searchName, setSearchName }) => {
  const handleSearchNameChange = event => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <p>
        filter shown with
        <input value={searchName} onChange={handleSearchNameChange} />
      </p>
    </div>
  );
};

export default Filter;
