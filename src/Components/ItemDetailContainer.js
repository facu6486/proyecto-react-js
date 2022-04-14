import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";

//const { products } = require("../utils/products")

const ItemDetailContainer = (props) => {

    const [datos, setDatos] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    },  []);
    console.log (datos)

    return (

        <>
            <ItemDetail item={datos} />
        </>

    );
};

export default ItemDetailContainer;