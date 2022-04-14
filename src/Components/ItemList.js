import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    console.log(items)
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} image={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;