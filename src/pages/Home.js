import React, { useState } from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner/index'
import Main from '../components/Main/index'
import Footer from '../components/Footer/index'

const Home = () =>{
    const containerPage = {
        minHeight: '100%'
    }
 
    const styleMain = {
        minHeight: 'calc(100vh - 190px)'
    }
    return<div className='container_page' style={containerPage}>
        <div clasname ='container_notfooter' style={styleMain}>
            <Menu/>
            <Banner/>
            <Main/>
        </div>
        <div clasname ='container_footer'>
            <Footer/>
        </div>
    </div>
}

export default Home