import React from 'react'
import './style.css'

const BannerSecond = ({title}) => {

    return<>
        <div className='container__second_banner' >
            <div className='banner__background'>
                <div className='banner__box'>
                    <div className='section1'>
                        <div className='title1'>
                            <h2>Работа с  Журналами</h2>
                        </div>
                        <div className='title2'>
                            <h1>{title}</h1>
                        </div>
                        <div className='banner__img1'></div>
                    </div>

                    <div className='section2'>
                        <div className='banner__img2'></div>
                        {window.location.href === 'http://localhost:3000/find' && <div className='instruction'>
                            <div className='title__instruction'>Обратите внимвние на некоторые правила пойска</div>
                            <div className='start__instruction'>Для этого необходимо:</div>
                            <ul>
                                <li>В поле "Имя журнала" укажите имя журнала в оригинале</li>
                                <li>Убедитесь в том что имя напечатанно правильно ;</li>
                                {/* <li>Имя файла уникальна.</li> */}
                            </ul>
                        </div>}
                        {window.location.href === 'http://localhost:3000/upload' && <div className='instruction'>
                            <div className='title__instruction'>Приготовьте файл к загрузке</div>
                            <div className='start__instruction'>Для этого необходимо:</div>
                            <ul>
                                <li>Файл имеет формат .csv;</li>
                                <li>Убедитесь в том что кодировка символов utf-8 и при открытье файл читаемый;</li>
                                <li>Имя файла уникальна.</li>
                            </ul>
                        </div>}
                    </div>
            
                </div>    

            </div> 
        </div>
    </>
}

export default BannerSecond