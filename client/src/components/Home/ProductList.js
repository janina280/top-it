import React, {useState} from "react";
import {getImageUrl} from "../../utils/Utils";

function ProductList({data}) {
    const [filters, setFilters] = useState(["Name"]);

    const handleFilter = (filter) => {
        filters.includes(filter)
            ? setFilters(filters.filter((value) => value !== filter))
            : setFilters(filters.concat(filter));
    };

    const filteredData = [data].filter(
        (item) =>
            (filters.includes("Name") && item.type === "Name")
    );

    const listItems = data.map((product) => (
        <li>
            {/*<img src={getImageUrl(product)} alt={product.name}/>*/}
            <p>
                <b>{product.name}:</b>
                {" " + product.description + " "}
                known for {product.specification}
            </p>
        </li>
    ));

    return (
        <>
            <div>
                <label htmlFor="name">
                    Filter by name:
                    <input
                        id="name"
                        type="text"
                        checked={filters.includes("Name")}
                        onChange={() => handleFilter("Name")}
                    />
                </label>
            </div>
            <ul>{listItems}</ul>
        </>
    );
}

export default ProductList;
