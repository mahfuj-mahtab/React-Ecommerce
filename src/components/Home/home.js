import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Banner from './Banner'

export default function home() {
  return (
    <div>
      <div className="header_section">
        <Header/>
        </div>
        <Banner/>
        <div className="footer_section">
        <Footer/>
        </div>
    </div>
  )
}
