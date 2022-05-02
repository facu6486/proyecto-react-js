import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} image={item.image} stock={item.stock} description={item.description} />)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;