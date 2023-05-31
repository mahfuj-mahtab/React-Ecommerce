import React from 'react'
import Header from '../header'
import Footer from '../footer'

export default function home() {
  return (
    <div>
      <div className="header_section">
        <Header/>
        </div>
        <div className="footer_section">
        <Footer/>
        </div>
    </div>
  )
}
