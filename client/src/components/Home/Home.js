import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../constants/apiConstants";
import axios from "axios";
import ProductList from "./ProductList";
import {useAuth} from "../../AuthProvider";

function Home(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const auth = useAuth();
    //todo: something is wrong between return an the products value
    const fetchData = () => {
        setIsLoading(true);
        fetch(API_BASE_URL + "/product/all", {
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        })
            .then(result => {
                if (result.status !== 200) {
                    throw new Error(result.statusMessage);
                }
                return result.json();
            })
            .then(result => {
                setProducts(result);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
                props.showError(error);
            })
    }

    useEffect(() => {
        props.updateTitle("Home");
        fetchData()
    }, []);


    return isLoading ?
        (<div>Loading... </div>) :
        (<ProductList data={products}/>);
}

export default Home;
