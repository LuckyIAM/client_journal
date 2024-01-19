import React from 'react'
import './style.css'

const Banner = () =>{

    return<>
        <header className='body_of_main'>
            <div className='banner_img'></div>
            <div className='title'>
                {window.innerWidth >= 1300 ?<h1>Журналы
                Российской <br/>
                государственной <br/>
                библиотеки искусств
                </h1>
                : 
                <h1>Журналы Российской государственной библиотеки искусств</h1>
                }
            </div>
                
        </header>
    </>
}

export default Banner



