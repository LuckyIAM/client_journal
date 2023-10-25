import './App.css';
import React, {useState} from "react"
import {BrowserRouter} from "react-router-dom"
import AppRouter from './router/Approuter';
import Modal from './components/Modal/index'
import Api from './Api'

// console.log(process.env.REACT_APP_API_URL);
const Context = React.createContext({})

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  const [popupActiv, changePopupActiv] = useState(false)
  const [api, setApi] = useState(new Api(token))
  const [name, setName] = useState(localStorage.getItem('user')? localStorage.getItem('user') : '')
  const [ flagReg, setFlagReg] = useState(false)
  const [roleSave, setRoleSave] = useState(localStorage.getItem('role')? localStorage.getItem('role') : '')
  const [inportORparse, setImportORparse] = useState('')
  const [importANDparse, setImportANDparse] = useState(false)
  const [findJournals, setFindJournals] = useState(localStorage.getItem('journals') ? JSON.parse(localStorage.getItem('journals')) : '')
  const [findJouranl, setFindJournal] = useState(localStorage.getItem('find_journal') ? JSON.parse(localStorage.getItem('find_journal')) : [])
  const [heightBox, setHeightBox] =useState('0px')
  const [boxId, setBoxId] = useState(localStorage.getItem('box_id') ? localStorage.getItem('box_id') : '')
  const [infoBox, setInfoBox] = useState(JSON.parse(localStorage.getItem('info_box')) || {})
  const [text, setText] = useState('')
  const [ nameJournal, setNameJournal] =useState(localStorage.getItem('name_journal') ? localStorage.getItem('name_journal') : "")
  const [year, setYear] = useState('')
  const [showComponent, setShowComponent] = useState(false)
 

  return <Context.Provider value ={{
    api: api, 
    setApi: setApi,
    token: token,
    setToken: setToken,
    popupActiv: popupActiv,
    changePopupActiv: changePopupActiv,
    name:name,
    setName: setName,
    flagReg,
    setFlagReg,
    roleSave: roleSave,
    setRoleSave: setRoleSave,
    inportORparse: inportORparse,
    setImportORparse: setImportORparse,
    importANDparse: importANDparse,
    setImportANDparse:setImportANDparse,
    findJournals: findJournals,
    setFindJournals: setFindJournals,
    heightBox: heightBox,
    setHeightBox: setHeightBox,
    boxId: boxId, 
    setBoxId: setBoxId,
    findJouranl: findJouranl,
    setFindJournal: setFindJournal,
    infoBox: infoBox, 
    setInfoBox: setInfoBox,
    text: text, 
    setText: setText,
    nameJournal: nameJournal, 
    setNameJournal: setNameJournal,
    year:year, 
    setYear: setYear,
    showComponent: showComponent, 
    setShowComponent: setShowComponent
  }}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    <Modal 
      isActive={popupActiv}
      changeActiv={changePopupActiv}
    />
  </Context.Provider>
}

export {App, Context};
