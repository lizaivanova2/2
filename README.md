# Simple Brown Box

Учебное демо для фронтенд‑и бекенд‑практики: лендинг сервиса подарочных боксов с локальным сервером авторизации на Node.js/Express и SQLite.

## Описание

Проект демонстрирует типовой стек «Express + статический фронтенд»:

- адаптивная витрина (`index1.html`) с Bootstrap и кастомными стилями;
- примеры каталогов (`index.html`, `index2.html`) и ассетов;
- REST‑эндпоинты регистрации/логина, использующие лёгкую SQLite‑БД для хранения пользователей.

Подходит студентам, которые отрабатывают структуру статического SPA/MPA и базовые серверные сценарии (регистрация, логин, отдача статики).

## Установка и запуск

1. Убедитесь, что установлен Node.js ≥ 18 и npm.
2. Клонируйте репозиторий и перейдите в директорию проекта.
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Запустите сервер разработки (Express отдаёт статику и REST):
   ```bash
   npm start
   ```

## Примеры использования

- Регистрация пользователя:
  ```bash
  curl -X POST http://localhost:3000/register ^
    -H "Content-Type: application/json" ^
    -d "{\"username\":\"demo\",\"password\":\"secret\"}"
  ```
- Авторизация:
  ```bash
  curl -X POST http://localhost:3000/login ^
    -H "Content-Type: application/json" ^
    -d "{\"username\":\"demo\",\"password\":\"secret\"}"
  ```
- Витрина доступна напрямую по `index1.html`; остальные страницы (`index.html`, `index2.html`) можно использовать как дополнительные макеты.

## Структура репозитория

- `index1.html` — основная промо‑страница Simple Brown Box.
- `index.html`, `index2.html` — дополнительные макеты/прототипы.
- `style.css`, `style1.css`, `style2.css` — стили для соответствующих страниц.
- `assets/` — изображения и графика для карточек и логотипов.
- `server.js` — Express‑сервер, API `/register` и `/login`, инициализация SQLite.
- `database.db` — файл базы данных SQLite (создаётся автоматически).
- `package.json`, `package-lock.json` — зависимости и скрипты Node.js.

## Технические требования

- Node.js ≥ 18.0
- npm ≥ 9.0
- SQLite 3 (поставляется вместе с модулем `sqlite3`)
- Поддерживаемые ОС: Windows 10+, macOS 12+, любые современные Linux‑дистрибутивы.
- Браузер с поддержкой ES6 и Flexbox (Chrome, Edge, Firefox, Safari актуальных версий).

## Команда

- Иванова Елизавета - Full-Stack development

## Контакты

- Email: `team.simplebrownbox@example.com`
- Telegram: `https://t.me/simplebrownbox`
- Issues: используйте раздел Issues репозитория GitHub.





