import React from 'react'
import $ from 'jquery'
import SideBar from "./SideBar";


const Header = ()=>{

    $('[href^="#"]').on('click',function(){
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        },{
            duration:1000,
            easing:"smooth"
        });
        return false;
    });

    return (
        <div className="headerCtn">
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <header className="header">
                <div id="divLogo">
                    <img className="carwashLogo" src="../resources/carwash_logo.png" alt="carwash-logo"/>
                    <p id="companyName">Аквапроект</p>
                </div>
                <div className="navbar">
                    <a href="#about">О нас</a>
                    <a href="#services">Услуги</a>
                    <a href="#photos">Фото</a>
                    <a href="#form">Оставить <br></br>заявку</a>
                    <a href="#address">Контакты</a>
                </div>
            </header>
        </div>

    );
}
export default Header;
