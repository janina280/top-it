import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../constants/apiConstants";
import axios from "axios";
import ProductList from "./ProductList";
import {useAuth} from "../../AuthProvider";

function Home(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();
    //todo: something is wrong between return an the products value
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios
                .get(API_BASE_URL + "/product/all", {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });
            if (result.status !== 200) {
                setProducts(result.data);
            }
            setIsLoading(false);
        }
        props.updateTitle("Home");
        fetchData();
    }, []);

    return (
        <ProductList data={products}/>
    )
}

export default Home;
