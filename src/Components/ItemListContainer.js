import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebase';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        const fetchFirestore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        }
        fetchFirestore();
    }, [ idCategory ]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    );
}

export default ItemListContainer;