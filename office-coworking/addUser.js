const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Подключитесь к вашей базе данных
mongoose.connect('mongodb://localhost:27017/data_coworking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

async function addUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    console.log('Пользователь добавлен:', user);
}

// Пример добавления пользователя
addUser('dosymzhan', 'dosymzhan20404@gmail.com', '@Dosik2004')
    .then(() => {
        mongoose.connection.close(); // Закрыть соединение после добавления
    })
    .catch(err => {
        console.error('Ошибка при добавлении пользователя:', err);
        mongoose.connection.close(); // Закрыть соединение в случае ошибки
    });
