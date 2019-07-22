import React from 'react';
import './shop-header.css';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux';

const ShopHeader = ({ items, total }) => {
  return (
    <header className="shop-header row">
      <Link to='/'>
      <div className="logo text-mute" >Books Store</div>
      </Link>
      <Link to="/cart" className="shopping-cart">
      <div>
        <i className="cart-icon fa fa-shopping-cart" />
        {items} Books (${total})
      </div>
      </Link>
    </header>
  );
};


const mapStateToProps = (state) => {
 const {shoppingCart: {orderCount, orderTotal}} = state.bookReduser
  return {
     items: orderCount,
     total: orderTotal
  };
};

export default connect(mapStateToProps)(ShopHeader);