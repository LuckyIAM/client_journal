import React from "react"
import Banner from '../components/Banner/index'
import Menu from "../components/Menu"
import UploadContainer from "../components/UploadContainer/index"
import Footer from "../components/Footer"




const ImportFile = () => {
    console.log(window.location.href);
    return<>
    <Menu/>
    <main className="import_data__container">
        <Banner/>
        <UploadContainer/>
        <div className="toppadiing" style={{position: 'relative', top: '129px'}}>
        <Footer/>
        </div>
        
    </main>

    </>

}

export default ImportFile