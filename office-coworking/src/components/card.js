// src/components/Card.js
import React from 'react';
import './card.css'; // Подключаем стили для карточки

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="card-button">Подробнее</button>
        </div>
    );
};

export default Card;
