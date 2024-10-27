import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../constants/apiConstants";
import axios from "axios";
import ProductList from "./ProductList";
import {useAuth} from "../../AuthProvider";

function Home(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();
    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true);
            axios
                .get(API_BASE_URL + "/product/all", {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                })
                .then(function (response) {
                    if (response.status !== 200) {
                        setProducts(response.data);
                    }
                })
                .catch(function (error) {
                    props.showError("Please enter valid username and password");
                    console.log(error);
                });
            setIsLoading(false);
        }
        props.updateTitle("Home");
        fetchData();
    });

    return (
        {isLoading} ? (
            <div>Loading ...</div>
        ) : (<ProductList data={products}/>)
    )
}

export default Home;
