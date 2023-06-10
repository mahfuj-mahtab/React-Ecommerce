import React,{useEffect,useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from './Banner'
import Productsection from './Productsection'
import { cat_api_call } from '../../Api/category_api'
export default function Home() {
  const [category,setCategory] = useState([])
  const load_cat =()=>{
    cat_api_call().then((data)=>{
      setCategory(data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    load_cat();
  }, [])
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
