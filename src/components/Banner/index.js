import React, {useContext} from 'react'
import { Context } from '../../App'
import './style.css'

const Banner = () =>{
    const {changePopupActiv} = useContext(Context)

    const goToRegistration = e => {
        e.preventDefault()
        changePopupActiv(true)
    }



    return<>
        <heder className='body_of_main'>
            <div className='banner_img'></div>
            <div className='title'>
                <h1>Журналы</h1><br/>
                Российской <br/>
                государственной <br/>
                библиотеки искусств
                <br/>
                <button className='button_banner' onClick={goToRegistration}>Войти</button>
            </div>
                
        </heder>
    </>
}

export default Banner



