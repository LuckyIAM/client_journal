import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../App"
import './style.css'

const BoxInfo = () =>{
    const [text, setText] = useState('')
    const {infoBox, setInfoBox} = useContext(Context)
    
    useEffect(() => {
        console.log(infoBox);
        if((infoBox.name_journal).toLocaleLowerCase().includes((localStorage.getItem('name_journal')).toLocaleLowerCase())){
            let startIndex = (infoBox.name_journal).toLocaleLowerCase().indexOf((localStorage.getItem('name_journal')).toLocaleLowerCase())
            let lastIndex = startIndex + localStorage.getItem('name_journal').length
            setText(`${infoBox.name_journal.slice(0, startIndex)}<u>${infoBox.name_journal.slice(startIndex , lastIndex)}</u>${infoBox.name_journal.slice(lastIndex)}`)
            console.log(document.querySelectorAll('.choise_data')[2])
            console.log('text', text);
            document.querySelectorAll('.choise_data')[2].innerHTML = text
            console.log(localStorage.getItem('name_journal'), startIndex, lastIndex);
        }
        
    }, [text])

    

    // наити и выделить жырным с поиощю ыдшсу быстрее

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
            <td className="choise_data height1">qwerty</td>
        </tr>
        
    </table>
</div>}
</>
}

export default BoxInfo