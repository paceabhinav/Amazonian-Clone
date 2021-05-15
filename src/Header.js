import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';

export default function Header() {
    const [{basket}]=useStateValue();

    return (
        <nav className="header">

         {/* Logo On The Left */}
         <Link to='/'>
         <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header__logo"/>
         </Link>
         {/*Search Box*/}
         <div className="header_search">
         <input type="text" className="header__searchInput"/>
         <SearchIcon className="header__searchIcon"/>
         </div>

         <div className="header__nav">
         {/*  1 st Link To The Right*/} 
         <Link to="/login"className="header__link">
         <div className="header__option">
         <span className="header__optionLineOne">Hello Abhinav</span>
         <span className="header__optionLineTwo">Login</span>
         </div>
         </Link>
         {/*  2nd  Link To The Right*/} 
         <Link to="/" className="header__link">
         <div className="header__option">
         <span className="header__optionLineOne">Returns</span>
         <span className="header__optionLineTwo"> &Orders</span>
         </div>
         </Link>

         {/*  3rd  Link To The Right*/} 
         <Link to="/" className="header__link">
         <div className="header__option">
         <span className="header__optionLineOne">Your</span>
         <span className="header__optionLineTwo">Prime</span>
         </div>
         </Link>

         {/*  4th  Link To The Checkout Page*/} 
         <Link to="/checkout" className="header__link">
         <div className="header__optionBasket">
             {/* Shopping basket Icon*/}
              <AddShoppingCartIcon/>
             {/* Number Of Items In The Basket*/}
         <span className="header__optionBasketCount">{basket?.length}</span>
         </div>
         </Link>
         </div>      
         {/* Basket ICon With a Number*/}
        
        </nav>
    )
}
