import React, { useEffect, useRef } from "react";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../constants/apiConstants";
import axios from "axios";
import ProductList from "./ProductList";

function Home(props) {
  const products = useRef(0);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/product/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
        },
      })
      .then(function (response) {
        if (response.status !== 200) {
          products.current = response.data;
        }
      })
      .catch(function (error) {
        props.showError("Please enter valid username and password");
        console.log(error);
      });
  }, [props]);

  return <ProductList data={products.current} />;
}

export default Home;
