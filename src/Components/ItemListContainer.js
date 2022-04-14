import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '../utils/products';
//const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
    console.log(idCategory);
       //componentDidUpdate
       useEffect(() => {
        if (idCategory === undefined) {
            customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else { customFetch(2000, products.filter(item => item.categoryId === idCategory))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;