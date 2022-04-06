import ItemCount from "./ItemCount";

const ItemListContainer = () => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
    );
}

export default ItemListContainer;