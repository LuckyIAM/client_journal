import React, {useContext} from 'react'
import {Context} from "../../App"
import './style.css'


const Cards = ({icon, name, text, link, path}) =>{
const {roleSave, token} = useContext(Context)

    const cardIcon={
        backgroundImage: `url(${icon})`, 
        backgroundColor: "#fff",
        backgroundSize: 'cover',
        backgroundrepeat: 'no-repeat',
        width: window.innerWidth > 800 ? '200px' : '150px',
        height: window.innerWidth > 800 ? '200px' : '150px',
        border: '1px solid #fff',
        margin: '30px 30px 30px 50px',
        boxSizing: 'border-box',
    }

    const cardBoxWidth = {
        width: `100%`
    }

    const navigateToPage = e => {
        e.preventDefault()
        window.location.href = `http://localhost:3000/${e.currentTarget.dataset.path}`
    }


    return<>
        {token && <>
            {roleSave !== 'ADMIN' && name === 'Пойск данных' && <div className='card_box'  style={cardBoxWidth} data-path={path} onClick={navigateToPage}>
                <div className='card__icon' style={cardIcon}></div>
                <div className='container_textcard'>
                    <div className='card_name'>{name}</div>
                    <div className='text_card'>{text}</div>
                    <div className='link'>{link}</div>
                </div>
            </div>}
            {roleSave === 'ADMIN' && <div className='card_box' style={cardBoxWidth} data-path={path} onClick={navigateToPage}>
                <div className='card__icon' style={cardIcon}></div>
                <div className='container_textcard'>
                    <div className='card_name'>{name}</div>
                    <div className='text_card'>{text}</div>
                    <div className='link'>{link}</div>
                </div>
            </div>}
        </>
        } 
    </>
}

export default Cards