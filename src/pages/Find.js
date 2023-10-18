import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import FindContainer from "../components/FindContainer";
import Footer from "../components/Footer";

const Find = () => {

    return<>
    <Menu/>
    <Banner/>
    <FindContainer/>
    <div className="toppadiing" style={{position: 'relative', top: '230px'}}>
        <Footer/>
    </div>
    </>
}

export default Find