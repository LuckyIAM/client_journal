import React from 'react'
import Card from '../Card/index'
import './style.css'

const objData = [
    {
        icon: '../../image/load_file.png',
        title: 'Загрузка файла',
        text: 'В данном разделе загружаете фаилы с данными в базе',
        link: 'Перейти к загруске',
        path: 'upload'
    },
    {
        icon: '../../image/search_data.png',
        title: 'Пойск данных',
        text: 'Для осушествление пойска журналов используите этот раздел', 
        link: 'Перейти к пойску',
        path: 'find'
    }
]


const Main = () => {

    return<>
    <main className='main_container'>
        <h2>Работа с  журналами</h2>
        <div className='cards_container'>
            {objData.map( (elem, i) => <Card
            key={i}
            icon = {elem.icon}
            name = {elem.title}
            text = {elem.text}
            link = {elem.link}
            path={elem.path}
            />)}
        </div>
    </main>
    </>
}

export default Main