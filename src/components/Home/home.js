import React,{useEffect,useState} from 'react'
import Header from '../header'
import Footer from '../footer'
import Banner from './Banner'
import Productsection from './Productsection'
export default function home() {
  
  return (
    <div>
      <div className="header_section">
        <Header/>
        </div>
        <Banner/>
        <Productsection/>
        <div className="footer_section">
        <Footer/>
        </div>
    </div>
  )
}
