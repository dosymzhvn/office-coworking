const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config(); // Подключаем dotenv

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB подключен'))
.catch(err => console.log(err));

// Модель пользователя
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Регистрация пользователя
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    console.log('Полученные данные:', { username, email, password });

    try {
        const existingUser = await User.findOne({ email });
        console.log('Существующий пользователь:', existingUser);
        if (existingUser) {
            return res.status(400).send('Пользователь с таким email уже существует');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).send('Пользователь зарегистрирован');
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        res.status(400).send('Ошибка регистрации');
    }
});


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
