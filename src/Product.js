import React from 'react'
import "./Product.css";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from './StateProvider';

export default function Product({ id, title, price, rating, image }) {

    const [{basket},dispatch]=useStateValue();

    const addToBasket=()=>{
      return dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <small> $</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => {
                            return <p><StarRateIcon></StarRateIcon></p>
                        })
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}><AddShoppingCartIcon></AddShoppingCartIcon>
            <span className="product__basketName">Add To Basket </span>
            </button>
        </div>
    )
}
