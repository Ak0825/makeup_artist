import React from 'react'
import NavBar from './components/NavBar' 
import About from './About/About'
import ServicesSection from './Services/ServicesSection'
import ImagesSection from './images/ImagesSection'
import ContactUs from './contactUs/ContactUs'
import Footer from './Footer/Footer'
import Home from './Home/Home'

const First = () => {
  return (
    <div>
        <NavBar/>
        <Home/>
        <About/>
        <ServicesSection/>
        <ImagesSection/>
        <ContactUs/>
        <Footer/>

    </div>
  )
}

export default First