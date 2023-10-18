import React from 'react'
import './style.css'



const Cards = ({icon, name, text, link, path}) =>{
    


    const cardIcon={
        backgroundImage: `url(${icon})`, 
        backgroundColor: "#fff",
        backgroundSize: 'cover',
        backgroundrepeat: 'no-repeat',
        width: '100px',
        height: '100px',
        border: '1px solid #fff',
        borderRadius: '50px',
        margin: '30px',
        boxSizing: 'border-box',
    }

    const navigateToPage = e => {
        e.preventDefault()
        window.location.href = `http://localhost:3000/${e.currentTarget.dataset.path}`
    }


    return<>
        <div className='card_box' data-path={path} onClick={navigateToPage}>
            <div className='card__icon' style={cardIcon}>
            </div>
            <div className='card_name'>{name}</div>
            <div className='text_card'>{text}</div>
            <div className='link'>{link}</div>
        </div>
    </>
}

export default Cards