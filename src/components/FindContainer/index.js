import React, {useState, useContext} from "react";
import { Context } from "../../App";
import Loader from "../Loader/index";
import JournalCard from "../JournalCard/index";
import './style.css'

const FindContainer = () => {
    const [journalName, setJournalName] = useState('')
    const [year, setYear] = useState('')
    const [numberEdition, setNumberEdition] = useState('')
    
    const {api, importANDparse, setImportANDparse, findJournals, setFindJournals, token, findJousranl, setFindJournal} = useContext(Context)
 
    setFindJournals(findJousranl !== '0px' ? `${((400 + 50) * Math.ceil(findJousranl.length/3)) + 400}px` :  '0px' )

    const numJournal = {
        height: findJournals
    }
    const sendToServer = e => {
        e.preventDefault()
        setImportANDparse(true)
        console.log('start', importANDparse);
        console.log(journalName, year);
        console.log(token);
        localStorage.setItem('name_journal', journalName)
        api.find({'data_search': journalName})
            .then(res => res.json())
            .then(dt => {
                let data = dt
                let arr = []
                let res = []
                if(journalName && !year && !numberEdition){
                    localStorage.setItem('find_journal', JSON.stringify(data))
                }

                if(journalName && year && !numberEdition){
                    let f = data ? 
                    data.map((elem) => {
                        if(elem.name_journal.includes(year)){
                            
                            arr.push(elem)
                        }
                        }) : {}
                    console.log(arr);  
                    localStorage.setItem('find_journal', JSON.stringify(arr))
                    setFindJournal(arr)
                }
                console.log(numberEdition);
                if(journalName && year && numberEdition){
                    console.log('true');
                    localStorage.setItem('find_journal', JSON.stringify(data))
                    let f = data ? 
                    data.map((elem) => {
                        if(elem.name_journal.includes(year)){
                            arr.push(elem)
                        }
                        }) : {}
                    let endParse = arr ? arr.map(e => {
                        console.log(e.name_journal);
                        if(e.name_journal.includes(numberEdition)){
                            res.push(e)
                        } 
                    }):[]
                    console.log(res);
                    localStorage.setItem('find_journal', JSON.stringify(res))
                    setFindJournal(res)
                }
                
                setFindJournal(JSON.parse(localStorage.getItem('find_journal')))                  
                console.log(findJousranl);
                setImportANDparse(false)
                setJournalName('')
                setYear('')
                setNumberEdition('')
            })
        
    }

    return<>
    <main>
    <div className="container2">
        <div className='find__instruction'>
            <div className='title2__instruction'>Обратите внимвние на некоторые правила пойска</div>
            <div className='start__instruction'>Для этого необходимо:</div>
            <ul>
                <li>В поле "Имя журнала" укажите имя журнала в оригинале;</li>
                <li>Убедитесь в том что имя напечатанно правильно;</li>
            </ul>
        </div>
        <div className="container__upload">
            <form className="findf">
                <div className="colum">
                    <label htmlFor="flag__name">Имя журнала</label>
                    <input type="text"
                    id="flag__name"
                    placeholder="Современная архитектура"
                    value={journalName}
                    onChange={e => {
                        setJournalName(e.target.value)}}/>
                    <label htmlFor="year">Год</label>
                    <input type="text"
                    id="year"
                    placeholder="1999"
                    value={year}
                    onChange={e => {
                        setYear(e.target.value)}}/>
                    <label htmlFor="edition">Издание</label>
                    <input type="text"
                    id="edition"
                    placeholder="060518"
                    value={numberEdition}
                    onChange={e => {
                        setNumberEdition(e.target.value)}}/>
                    <button className="button_banner" type='submit' onClick={sendToServer}>Поиск</button>
                </div>
                
            </form>
        <Loader flag={importANDparse}/>
        </div>
        </div>
        <div className="bg_color">
            <div className="num_journal" >Наидено {findJousranl.length} журналов с таким названием</div>
            <div className="centred">
            <div className="cards" style={numJournal}>
                {findJousranl && findJousranl.map((elem,i) => <JournalCard
                key={i}
                id = {elem.id}
                box_num={elem.num_box}
                quantity = {elem.quantity}
                name_journal = {elem.name_journal.length >= 100 ? elem.name_journal.slice(0, 20) + '...' : elem.name_journal}
                />
                )}
            </div>
        </div>
        </div>
    </main>
    </>
}

export default FindContainer