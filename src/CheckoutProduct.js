import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

export default function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        //Remove The Item From The Basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }
    return (
        <div className="checkoutProduct">
                <img src={image} alt="Image For Props" className="checkoutProduct__img" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>

                    <p className="product__price">
                        <small> $</small>
                        <strong>{price}</strong>
                    </p>

                    <div className="product__rating">
                        {
                            Array(rating).fill().map((_) => {
                                return <p><StarRateIcon></StarRateIcon></p>
                            })
                        }
                    </div>
                    <button className="checkoutProduct__info__button" onClick={RemoveFromBasket}>Remove From Shipment</button>
                </div>
            </div>
    )
}
