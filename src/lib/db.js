import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'diyapapula',
    database: 'color_palette_db',
});

pool.getConnection()
    .then(conn => {
        console.log("Database connection successful!");
        conn.release();
    })
    .catch(err => {
        console.error("Database connection failed:", err);
    });

export default pool;
