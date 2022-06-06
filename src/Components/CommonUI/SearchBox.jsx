import React from "react";
import { Input, InputGroup } from "rsuite";
import { FaSearch } from "react-icons/fa";

function SearchBox({ width = 400 }) {
  return (
    <div style={{ paddingLeft: "5px" }}>
      <InputGroup inside style={{ width }}>
        <InputGroup.Button>
          <FaSearch />
        </InputGroup.Button>
        <Input placeholder="Search wines, customers here..." style={{ borderRadius: "4px" }} />
      </InputGroup>
    </div>
  );
}

export default SearchBox;
