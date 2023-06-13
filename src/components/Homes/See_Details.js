import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

export default function See_Details() {
  return (
    <>
    <Header/>
    <div className="product_details">
        <div className="main_product_details">
            <div className="left_main_product_details">
                <div className="left_main_product_details_top">
                <img className='product_details_img' src={require('../../asset/banner.jpg')} alt="" />
                </div>
                <div className="left_main_product_details_bottom">
                <img className='product_details_sub_img' src={require('../../asset/banner.jpg')} alt="" />
                <img className='product_details_sub_img' src={require('../../asset/banner.jpg')} alt="" />
                <img className='product_details_sub_img' src={require('../../asset/banner.jpg')} alt="" />
                </div>
            </div>
            <div className="right_main_product_details">
                <h1 className="product_details_product_h1">EcoFlow RIVER Portable Power Station
            </h1>
            <p className="product_short_description">
                <b>Short Description </b> <br /><br />
                The EcoFlow RIVER can charge from 0-80% in under an hour or to full in just 96 minutes. You can remove the extra battery from the base of the unit to make it more lightweight, reducing its capacity to 288Wh and its weight by 5.5 lbs (2.5 kg) when you're on the go. With multiple ports available, you can power up to 10 devices at once. The device has a 288Wh capacity, providing enough power to charge your phone 42 times, your drone 6 times</p>
            <p className="product_details_price"><b>Price : </b> 200 Tk</p>
            <Link className='buy_now'>Buy Now</Link>
            </div>
        </div>
  
    </div>
    <div className="details_section_bottom">
        <div className="main_section_bottom">
        <h3 className="details_btn_txt">Details</h3>
        <p className="details_product_section_details"> 
        <b>Details</b> <br /> <br />
        EcoFlow RIVER Portable Power Station
The EcoFlow RIVER can charge from 0-80% in under an hour or to full in just 96 minutes. You can remove the extra battery from the base of the unit to make it more lightweight, reducing its capacity to 288Wh and its weight by 5.5 lbs (2.5 kg) when you're on the go. With multiple ports available, you can power up to 10 devices at once. The device has a 288Wh capacity, providing enough power to charge your phone 42 times, your drone 6 times, or make 24 cups of coffee with a coffee maker. However, it is not recommended to drink all the coffee at once. The EcoFlow RIVER also features X-Boost technology, which allows it to power high-wattage appliances up to 1800W, such as a hairdryer, vacuum cleaner, or even a lawnmower. Additionally, it can be charged using solar power by linking up to two 110W solar panels, allowing it to be fully charged in under 3 hours.

Buy EcoFlow RIVER Portable Power Station from Star Tech
In Bangladesh, you can get original EcoFlow RIVER Portable Power Station From Star Tech. We have a large collection of latest EcoFlow Portable Power Station to purchase. Order Online Or Visit your Nearest Star Tech Shop to get yours at lowest price. The EcoFlow RIVER Portable Power Station comes with 2 Years warranty for all Ecoflow power stations only solar panels with 01 Year warranty.
        </p>
    </div>
    </div>
    <Footer/>
    </>
  )
}
