import React from "react";
import { Input, Space } from "antd";
import "./search.scss";
function SearchForm() {
  const onSearch = (value) => console.log(value);

  return (
    <div className="search-form">
      <Input
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </div>
  );
}

export default SearchForm;
