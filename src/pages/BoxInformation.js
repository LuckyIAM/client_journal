import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import BoxInfo from "../components/BoxInfo"
import Footer from "../components/Footer";


const BoxInformation = () => {

    return<>
    <Menu/>
    <Banner/>
    <BoxInfo/>
    <div className="toppadiing" style={{position: 'relative', top: '50px'}}>
        <Footer/>
    </div>
    </>

}

export default BoxInformation