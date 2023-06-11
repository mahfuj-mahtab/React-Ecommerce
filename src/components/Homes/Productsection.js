import React from 'react'
import Product from './Product'
import {useEffect,useState} from 'react'

import { getProducts } from '../../Api/product_api_call'

export default function Productsection() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const load_product = ()=>{
    getProducts().then(
      (response)=>{
        setProducts(response)
        console.log(response)
      }
    ).catch(
      (err)=>{
        console.log("Product error is :",err)
      }
    )
  }
  
useEffect(() => {
  load_product()
}, [])
  return (
    <div className='product_section'>
        <h1 className='product_h1'>Our Products</h1>

        {products.map((product,index)=>{

        return <Product key={index} name={product.name} url="p1.jpg" price={product.price}/>
        })}

        {/* <Product name="Lenovo IdeaCentre 3 AMD Athlon Silver 3050U 4GB RAM 1TB HDD Brand PC" url="p1.jpg" price="235"/> */}


        {/* <Product name="Lenovo IdeaCentre 3050U 4GB RAM 1TB HDD Brand PC" url="p2.jpeg" price="235"/>
        <Product name=" AMD Athlon Silver 3050U 4GB RAM 1TB HDD Brand PC" url="p3.jpg" price="2635"/>
        <Product name="3050U 4GB RAM 1TB HDD Brand PC" url="p1.jpg" price="7235"/>
        <Product name="Lenovo IdeaCentre 3 AMD Athlon Silver 3050U 4GB RAM 1TB HDD Brand PC" url="p1.jpg" price="235"/>
        <Product name="Lenovo IdeaCentre 3050U 4GB RAM 1TB HDD Brand PC" url="p2.jpeg" price="235"/>
        <Product name=" AMD Athlon Silver 3050U 4GB RAM 1TB HDD Brand PC" url="p3.jpg" price="2635"/>
        <Product name="3050U 4GB RAM 1TB HDD Brand PC" url="p1.jpg" price="7235"/> */}
    </div>
  )
}
