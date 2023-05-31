import React from 'react'
// import  {} from FontAwesomeIcon
export default function header() {
  return (
    <header className='header'>
        <div className="main_header">
        <div className="left_header">
            <h2 className="logo">Ecom</h2>
        </div>
        <div className="middle_header">
            <input type="text" name="search" className="search" placeholder='Search' /><button className='button'>Search</button>
        </div>
        <div className="right_header">
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
        <i class="fa-solid fa-house"></i>
        </div>
        </div>
    </header>
  )
}
