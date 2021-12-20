import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../SideBar.css';
export default props => {
    return (
        <Menu>
            <a className="menu-item" href="#about">
                О нас
            </a>
            <a className="menu-item" href="#services">
                Услуги
            </a>
            <a className="menu-item" href="#photos">
                Фото
            </a>
            <a className="menu-item" href="#form">
                Оставить заявку
            </a>
            <a className="menu-item" href="#address">
                Контакты
            </a>
            <div className="sideBarFooter">
                <a id="phone" href="tel:+79858008106">+79858008106</ a>
                <p>Турчанинов переулок, 6с2</p>
                <p> Пн-Вс, 24/7</p>
            </div>

        </Menu>
    );
};