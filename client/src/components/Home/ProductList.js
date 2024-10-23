import React, { useState } from "react";
import { getImageUrl } from "../../utils/Utils";

function ProductList(data) {
  const [filters, setFilters] = React.useState(["SETUP", "LEARN"]);

  const handleFilter = (filter) => {
    filters.includes(filter)
      ? setFilters(filters.filter((value) => value !== filter))
      : setFilters(filters.concat(filter));
  };

  const filteredData = data.filter(
    (item) =>
      (filters.includes("SETUP") && item.type === "SETUP") ||
      (filters.includes("LEARN") && item.type === "LEARN")
  );

  const listItems = filteredData.map((product) => (
    <li>
      <img src={getImageUrl(product)} alt={product.name} />
      <p>
        <b>{product.name}:</b>
        {" " + product.profession + " "}
        known for {product.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <div>
        <label htmlFor="setup">
          Include SETUP:
          <input
            id="setup"
            type="checkbox"
            checked={filters.includes("SETUP")}
            onChange={() => handleFilter("SETUP")}
          />
        </label>
      </div>
      <div>
        <label htmlFor="learn">
          Include LEARN:
          <input
            id="learn"
            type="checkbox"
            checked={filters.includes("LEARN")}
            onChange={() => handleFilter("LEARN")}
          />
        </label>
      </div>
      <ul>{listItems}</ul>;
    </>
  );
}

export default ProductList;
