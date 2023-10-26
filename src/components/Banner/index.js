import React, {useContext} from 'react'
import { Context } from '../../App'
import './style.css'

const Banner = () =>{
    const {changePopupActiv} = useContext(Context)

    const goToRegistration = e => {
        e.preventDefault()
        changePopupActiv(true)
    }

    console.log(window.innerWidth);

    return<>
        <heder className='body_of_main'>
            <div className='banner_img'></div>
            <div className='title'>
                {window.innerWidth >= 1099 ?<><h1>Журналы</h1><br/>
                Российской <br/>
                государственной <br/>
                библиотеки искусств
                <br/></>: 
                <h1>Журналы Российской государственной библиотеки искусств</h1>
                }
                <button className='button_banner' onClick={goToRegistration}>Войти</button>
            </div>
                
        </heder>
    </>
}

export default Banner



