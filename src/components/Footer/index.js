import React from "react";
import './style.css'

const Footer = () => {
    return<>
    <footer className="footer__container">
        <div className="box2__about">
            <div className="about">
                Федеральное государственное<br/>
                бюджетное учреждение культуры<br/>
                библиотека искусств
            </div>
            <div className="adress">
                Наши адреса:<br/>

                Читальные залы:<br/>
                109189, Россия, Москва, Николоямская ул., 1,<br/>
                Библиотека иностранной литературы имени М.И.Рудомино

                Абонемент:<br/>
                127051, Россия, Москва, Петровские
                линии, д.1
            </div>
        </div>
        <div className="made">© Made by luckyIAm</div>
    </footer>
    </>
}

export default Footer