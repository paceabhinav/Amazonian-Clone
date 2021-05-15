import React from 'react'
import { useStateValue } from './StateProvider'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                {basket.length === 0 ?
                    (
                        <div>
                            <h1>Your Shopping Basket Is Empty</h1>
                        </div>
                    ) : (

                        <div className="checkout__ad__positive">
                            <h1>Your Shopping Basket </h1>
                            {/* List Out All The Products To The Basket*/}
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (

                <div className="checkout__right">
                   <h1>Sub-Total</h1>
                </div>
            )}
        </div>
    )
}
