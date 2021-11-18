import React from 'react'

const Header = ()=>{
    return (
        <div className="header">
            <div id="divLogo">
                <img className="carwashLogo" src="../resources/carwash_logo.png" alt="carwash-logo"/>
                <p id="companyName">Аквапроект</p>
            </div>
            <div className="navbar">
                <p>О нас</p>
                <p>Услуги</p>
                <p>Фото</p>
                <p>Оставить <br></br>заявку</p>
                <p>Контакты</p>
            </div>
        </div>
    );
}
export default Header;
