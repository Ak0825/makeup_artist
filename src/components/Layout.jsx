import React from 'react'
import NavBar from './NavBar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <NavBar/>
        </div>
        <div className="">
            {children} 
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout