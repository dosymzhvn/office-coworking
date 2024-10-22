// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './auth.css'; // Импортируем стили

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            console.log('Вход успешен, токен:', response.data.token);
            // Сохраните токен в localStorage для использования в будущем
            localStorage.setItem('token', response.data.token);
            // Перенаправьте пользователя на нужную страницу после входа
        } catch (err) {
            setError('Ошибка входа: ' + (err.response?.data || 'Неизвестная ошибка'));
            console.error('Ошибка входа:', err);
        }
    };

    return (
        <div className="auth-container">
            <h2>Вход</h2>
            {error && <p className="error">{error}</p>}
            <form className="auth-form" onSubmit={handleSubmit}>
                <label>
                    Электронная почта:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Пароль:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
