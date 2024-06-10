import React from 'react'
import './home.css'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import logo from '../assets/1.png'
const Home = () => {
  return (
     <Layout>
        <div className="row home_back d-flex align-items-center justify-content-around" style={{
          padding:'120px 0'
        }}>
          <div className="col text-light">
            <h3 className='text-light wel'>Welcome</h3>
            <h5 className='wel_sub'>Enhancing beauty is an art, and my canvas is your face 💄</h5>
          </div>
          <div className="col">
            <img src={logo} alt="" />
          </div>
        </div>
     </Layout>
  )
}

export default Home