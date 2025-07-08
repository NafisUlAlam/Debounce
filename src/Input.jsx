import React, { useState } from "react";
import { useDebouncedCallback } from "./useDebouncedCallback";

const Input = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (str) => {
    console.log(str);
  };

  const debouncedSearch = useDebouncedCallback(handleSearch, 500);
  console.log("debounced search", debouncedSearch);
  console.log("input render");
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => {
          debouncedSearch(e.target.value);
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
    </div>
  );
};

export default Input;
