import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

const ItemCount = ({ stock, initial,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={increment}><Add /></Button>
            {
                stock
                ? <Button variant="outlined" color="success" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="outlined" disabled>Add to Cart</Button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;