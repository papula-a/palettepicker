// src/app/api/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'diyapapula',
    database: 'palettepicker',
});

export default pool;
 