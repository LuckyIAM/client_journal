import React, {useContext} from 'react'
import {Context} from '../../App'
import { useNavigate } from 'react-router-dom'
import './style.css'


const Menu = () =>{

    const {changePopupActiv, token, setToken, name} = useContext(Context)
    const toMain = useNavigate()
    const toFind = useNavigate()

    const goToMain = e => {
        e.preventDefault()
        toMain('/')
    }

    const goToModal = e => {
        e.preventDefault()
        changePopupActiv(true)
    }

    const getOut = e =>{
        e.preventDefault()
        let applications = ['token', 'user', 'role', 'info_box', 'find_journal', 'box_id', 'year', 'name_journal', 'journals']
        for(let i = 0; i < applications.length; i++){
            localStorage.removeItem(applications[i])
        }
        setToken('')
        toMain('/')
       
    }
    const goFind = e => {
        e.preventDefault()
        toFind('/find')
    }

    return(
        <div className='container_box'>
            <div className='logo' onClick={goToMain}>
                
            </div>
            
            <div className='menu_bar'>
                {!token && <div className='container_column' onClick={goToModal}>
                    <div className='log_in'></div>
                    <div className='menu_title'>Войти</div>
                </div> }
                
                {token && <div className='container_column'>
                        <div className='avatar'></div>
                        <div className='menu_title'>{name}</div>
                </div>}
                <div className='container_column'  onClick={goFind}>
                        <div className='search'></div>
                        <div className='menu_title'>Поиск журналов</div>
                </div>
                {token && <div className='container_column' onClick={getOut}>
                        <div className='log_out' ></div>
                        <div className='menu_title'>Выйти</div>
                </div>}

                    
            </div>
        </div>
    )
}

export default Menu