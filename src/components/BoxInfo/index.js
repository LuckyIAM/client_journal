import React, {useContext, useEffect, useState} from "react";
// import { useNavigate } from "react-router-dom";
import {Context} from "../../App"
import './style.css'

const BoxInfo = () =>{
    const {infoBox, text, setText, boxId} = useContext(Context)
    // const redirect = useNavigate()
    useEffect(() => {
        // redirect(`/box/${boxId}`)
        setText(localStorage.getItem('info_box'))
        const changeText = document.querySelector('.height1')
        console.log(changeText);
        changeText.innerHTML = text
    }, [])
    
return<>
{infoBox && <div className="choice_box">
    <div className="chose_title">
        Отображение Коробки <span className="choice_id_box">№ {infoBox.num_box}</span>
    </div>
    <table className="choice_container">
        <tr>
            <th className="choise_text">Собрали коробку</th>
            <td className="choise_data">{infoBox.collector}</td>
        </tr>
        <tr>
            <th className="choise_text">Количество журналов в коробке</th>
            <td className="choise_data">{infoBox.quantity}</td>
        </tr>
        <tr>
            <th className="choise_text">Название журнала</th>
            <td className="choise_data height1"></td>
        </tr>
        
    </table>
</div>}
</>
}

export default BoxInfo