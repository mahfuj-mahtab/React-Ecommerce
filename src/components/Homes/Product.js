import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({name,url,price}) {
  return (
    <div className='product'>
        <img className='product_img' src={url}/>
        <h3 className='product_name'>{name}</h3>
        <b className='price'>{price} Taka</b>
        <Link className='add_to_cart'> Add To Cart</Link>
        <Link className='see_details'> See Details</Link>

    </div>
    
  )
}
