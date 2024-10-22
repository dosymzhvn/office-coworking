// src/components/Home.js
import React from 'react';
import Card from './card';
import './home.css'; // Подключаем стили для главной страницы

const Home = () => {
    const cards = [
        { title: 'Open Space', description: 'Совместное пространство для работы.' },
        { title: 'Офисы', description: 'Личные офисные пространства.' },
        { title: 'Конференц зал', description: 'Зал для проведения встреч и конференций.' },
        { title: 'Meeting room', description: 'Идеальное место для переговоров.' },
    ];

    return (
        <div className="home">
            <h1>Наши предложения</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default Home;
