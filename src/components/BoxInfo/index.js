import React, {useContext} from "react";
import {Context} from "../../App"
import './style.css'

const BoxInfo = () =>{
    
    const {boxId} = useContext(Context)
    let infoBox = JSON.parse(localStorage.getItem('info_box'))


return<>
<div className="choice_box">
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
            <td className="choise_data height1">{infoBox.name_journal}</td>
        </tr>
        
    </table>
</div>
</>
}

export default BoxInfo