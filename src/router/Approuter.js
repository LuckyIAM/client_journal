import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import ImportFile from '../pages/ImportFile';
import Find from '../pages/Find';
import BoxInformation from '../pages/BoxInformation';


const AppRouter = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/upload' element={<ImportFile/>}/>
            <Route path='/find' element={<Find/>}/>
            <Route path='box/:id' element={<BoxInformation/>}/>
        </Routes>
    )
}

export default AppRouter