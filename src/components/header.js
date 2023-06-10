// import  {} from FontAwesomeIcon
import { Link } from "react-router-dom";
import {API} from '../backend'
import {cat_api_call} from '../Api/category_api';
import React from 'react'
import {useEffect,useState}  from 'react'
const Header = ()=>{

  return (
    <>
 
    <div className='header'>
        <div className="main_header">
        <div className="left_header">
            <h2 className="logo">Ecom</h2>
        </div>
        <div className="middle_header">
            <input type="text" name="search" className="search" placeholder='Search' />
            <button className='button'>Search</button>
        </div>
        <div className="right_header">
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
        <div className="cart_section">
        {/* <div className="cart_num">2</div> */}
        <i class="fa-solid fa-cart-shopping cart"></i>
        <h2 className='h2'>10</h2>
        </div>
        <Link className='link_button' to="/login"><i class="fa-solid fa-right-to-bracket login_icon"></i> Login</Link>
        </div>
        </div>
    </div>
    <div className="bottom_header">
      <div className="bottom_header_main">
        <ul>
          {/* {category.map((cat,index)=>{
            return <li key={index}><Link to="">{cat.name}</Link></li>
          })} */}
          
          <li><Link to="">Coding</Link></li>
          <li><Link to="">Monitor</Link></li>
          <li><Link to="">Programming</Link></li>
          <li><Link to="">Programming</Link></li>
          <li><Link to="">Programming</Link></li>
        
        </ul>
      </div>
    </div>
    </>
  )
}
export default  Header