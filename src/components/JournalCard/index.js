import React, {useContext} from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import './style.css'

const JournalCard = ({box_num, quantity, name_journal, id}) => {
    const goTo = useNavigate()
    const {api, boxId, setBoxId} = useContext(Context)

    const getElement = e => {
        e.preventDefault()
        console.log(e.currentTarget); 
        localStorage.setItem('box_id', id)
        setBoxId(localStorage.getItem('box_id'))
        api.findOne(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('info_box', JSON.stringify(data))
            })
        goTo(`/box/${id}`)

    }

    return<>
    <div className="jornal_container" onClick={getElement}>
        <div className="journal_box">
            <div className="box_grid">
                <div className="num-box">
                    <div className="colum gap">
                        <div className="box_icon"></div>
                        <div className="box_bottom">Номер коробки:</div>
                    </div>
                    
                </div>
                <div className="box_text"> {box_num}</div>
                <div className="num-box">
                    <div> Количество журналов:</div>
                </div>
                <div className="quantity">{quantity}</div>
                <div className="num-box">
                    <div>Название журналов:</div>
                </div>
                <div className="nameJournal"> <span className="show-all-element" >{name_journal}</span></div>
            </div>
        </div>
    </div>
    </>
}

export default JournalCard