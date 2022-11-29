import React from 'react';
import '../App.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
    <div className='checkout__product'>
        <img className='checkout__product--image' src={image} alt="" />

        <div className='checkout__product--info'>
            <p className='checkout__product--title'>{title}</p>
            <p className='checkout__product--price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkout__product--rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <span key={i}>⭐️</span>
                ))}
            </div>
            {!hideButton && ( <button onClick={removeFromBasket}>Remove from basket</button> )}
            
        </div>
    </div>
  )
}

export default CheckoutProduct