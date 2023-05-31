import React from 'react'
// import  {} from FontAwesomeIcon
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className='header'>
        <div className="main_header">
        <div className="left_header">
            <h2 className="logo">Ecom</h2>
        </div>
        <div className="middle_header">
            <input type="text" name="search" className="search" placeholder='Search' /><button className='button'>Search</button>
        </div>
        <div className="right_header">
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
        <div className="cart_section">
        {/* <div className="cart_num">2</div> */}
        <i class="fa-solid fa-cart-shopping cart"></i>
        <h2 className='h2'>10</h2>
        </div>
        <Link className='link_button' to="/login">Login</Link>
        </div>
        </div>
    </div>
  )
}
