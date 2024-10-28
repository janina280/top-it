import React, {useState} from "react";
import {getImageUrl} from "../../utils/Utils";

function ProductList({data}) {
    const [filters, setFilters] = useState("*");

    const handleFilter = (filter) => {
        setFilters(filter);
    };

    const filteredData = [data].filter(
        (item) =>
            item.name.toLowerCase().includes(filters.toLowerCase())
    );

    const listItems = filteredData.map((product) => (
        <li>
            <div>
                <b>{product.name}:</b>
                <span>${product.price}</span>
                <br/>
                <p>{product.description}</p>
                <p>{product.specification}</p>
            </div>
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
                        onChange={(e) => handleFilter(e.target.value)}
                    />
                </label>
            </div>
            <ul>{listItems}</ul>
        </>
    );
}

export default ProductList;
