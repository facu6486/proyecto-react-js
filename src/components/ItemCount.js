import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Button variant="text" onClick={increment}><Add /></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
                : <Button variant="contained" disabled>Agregar al Carrito</Button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;