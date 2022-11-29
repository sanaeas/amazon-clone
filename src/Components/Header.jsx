import React from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import {
    signOut
} from 'firebase/auth';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth);
        }
    }

  return (
    <div className='header'>
        <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
        </Link>
        <div className="header__search">
            <input type="text" className="header__search--input" />
            <SearchIcon className='header__search--icon' />
        </div>
        <div className="header__nav">
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__option--line-one">Hello {user ? user.email : 'Guest'}</span>
                    <span className="header__option--line-two">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <Link to="/orders">
                <div className="header__option">
                    <span className="header__option--line-one">Returns</span>
                    <span className="header__option--line-two">& Orders</span>
                </div>
            </Link>
            <div className="header__option">
                <span className="header__option--line-one">Your</span>
                <span className="header__option--line-two">Prime</span>
            </div>
            <Link to="/checkout">
                <div className="header__option--basket">
                    <ShoppingCartIcon />
                    <span className="header__option--line-two header__basket--count">{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header