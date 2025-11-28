const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;


const db = new sqlite3.Database('database.db');


db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

app.use(express.json());
app.use(express.static('.'));


app.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', 
        [username, password], 
        function(err) {
            if (err) {
                res.status(400).json({ error: 'Пользователь уже существует' });
                return;
            }
            res.json({ message: 'Регистрация успешна' });
        });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    db.get('SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, row) => {
            if (err) {
                res.status(500).json({ error: 'Ошибка сервера' });
                return;
            }
            if (row) {
                res.json({ message: 'Вход выполнен успешно' });
            } else {
                res.status(401).json({ error: 'Неверные учетные данные' });
            }
        });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
}); 