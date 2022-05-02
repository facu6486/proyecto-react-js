import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, where, query, orderBy } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemListContainer =()=>{
  const [ datos,setDatos] = useState([]);
  const { idCategory } = useParams(); 

  useEffect(()=>{
    const fetchFromFirestore = async(idCategory) => {
      let hasCategory;
      if (idCategory) {
        hasCategory=query(collection(db, "products"), where ('categoryId', '===', idCategory));
      } else {
        hasCategory=query(collection(db, "products"), orderBy ('name'));
        console.log ('fechtfromfirestore', "se va por el else", hasCategory);
      }
      const querySnapshot = await getDocs(hasCategory);
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return dataFromFirestore;
    }
    fetchFromFirestore(idCategory)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
  }, [idCategory]);

  return (
    <ItemList items={datos} />
);
}

export default ItemListContainer;