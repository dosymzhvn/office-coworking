import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <header>
            <h1>The Office Coworking Centre</h1>
            <nav>
                <ul>
                <li><Link to="/">Домашняя страница</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
                <li><Link to="/user">Личный кабинет</Link></li>
                <li><Link to="/register">Регистрация</Link></li>
                <li><Link to="/login">Вход</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
