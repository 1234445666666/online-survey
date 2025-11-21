// // src/config/db.js
// import sqlite3 from "sqlite3";
// import path from "path";
// import fs from "fs";
// import { env } from "../config/env";

// // Извлекает директорию из пути.
// const dbDir = path.dirname(env.DB_PATH);

// // Создать каталог базы данных, если он не существует.
// if (!fs.existsSync(dbDir)) {
//   // Создаёт папку, если её нет
//   fs.mkdirSync(dbDir, { recursive: true });
// }

// // Инициализация и подключение к базе данных SQLite
// // Создаёт файл, если его нет
// const db = new sqlite3.Database(env.DB_PATH, (err) => {
//   if (err) console.error("DB Error:", err);
//   else console.log("DB Connected:", env.DB_PATH);
// });

// db.serialize(() => {
//   // Таблица пользователей
//   // выполняет SQL-запросы для создания таблиц
//   db.run(`
//     CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       email TEXT UNIQUE NOT NULL,
//       password TEXT NOT NULL,
//       name TEXT
//     )
//   `);

//   // Таблица задач (связь с пользователем)
//   // выполняет SQL-запросы для создания таблиц
//   db.run(`
//     CREATE TABLE IF NOT EXISTS pull (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       task TEXT NOT NULL,
//       done INTEGER DEFAULT 0,
//       user_id INTEGER,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
//     )
//   `);
//   db.get(`SELECT * FROM users`, (err, row) => {
//     if (err) {
//       console.error("Error checking pull table:", err);
//       return;
//     }

//     if (row.count === 0) {
//       console.log("Adding test data to pull table...");

//       db.run("INSERT INTO pull (task, done) VALUES ('Test task 1', 0)");
//       db.run("INSERT INTO pull (task, done) VALUES ('Test task 2', 1)");
//       db.run(
//         "INSERT INTO pull (task, done) VALUES ('Test task 3', 0)",
//         function (err) {
//           if (err) {
//             console.error("Error adding test data:", err);
//           } else {
//             console.log("Test data added successfully");
//           }
//         }
//       );
//     }
//   });
// });

// export const usersDB = {
//   getAll: (callback) => {
//     db.all(`SELECT * FROM users`, callback);
//   },
//   getById: (id, callback) => {
//     db.get(`SELECT * FROM users WHERE id = ?`, [id], callback);
//   },

//   create: (user, callback) => {
//     db.run(
//       `INSERT INTO users (email, password, name) VALUES (?, ?, ?)`,
//       [user.email, user.password, user.name],
//       callback
//     );
//   },

//   update: (id, user, callback) => {
//     db.run(
//       `UPDATE users SET email = ?, password = ?, name = ? WHERE id = ?`,
//       [user.email, user.password, user.name, id],
//       callback
//     );
//   },

//   delete: (id, callback) => {
//     db.run(`DELETE FROM users WHERE id = ?`, [id], callback);
//   },
// };

// export default db;
// src/config/db.js
import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs";
import { env } from "../config/env";

// Извлекает директорию из пути.
const dbDir = path.dirname(env.DB_PATH);

// Создать каталог базы данных, если он не существует.
if (!fs.existsSync(dbDir)) {
  // Создаёт папку, если её нет
  fs.mkdirSync(dbDir, { recursive: true });
}

// Инициализация и подключение к базе данных SQLite
// Создаёт файл, если его нет
const db = new sqlite3.Database(env.DB_PATH, (err) => {
  if (err) console.error("DB Error:", err);
  else console.log("DB Connected:", env.DB_PATH);
});

db.serialize(() => {
  // Таблица пользователей
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL
    )
  `);

  // Таблица задач (связь с пользователем)
  db.run(`
    CREATE TABLE IF NOT EXISTS pull (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task TEXT NOT NULL,
      done INTEGER DEFAULT 0,
      user_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);
});

// Исправленная версия добавления тестовых данных
db.get("SELECT COUNT(*) as count FROM pull", (err, row: { count: number }) => {
  if (err) {
    console.error("Error checking pull table:", err);
    return;
  }

  // Проверяем что row существует и имеет свойство count
  if (row && row.count === 0) {
    console.log("Adding test data to pull table...");

    db.run("INSERT INTO pull (task, done) VALUES ('Test task 1', 0)");
    db.run("INSERT INTO pull (task, done) VALUES ('Test task 2', 1)");
    db.run(
      "INSERT INTO pull (task, done) VALUES ('Test task 3', 0)",
      function (err) {
        if (err) {
          console.error("Error adding test data:", err);
        } else {
          console.log("Test data added successfully");
        }
      }
    );
  } else {
    console.log(`Pull table already has ${row?.count} records`);
  }
});

export const usersDB = {
  getAll: (callback) => {
    db.all("SELECT * FROM users", callback);
  },
  getById: (id, callback) => {
    db.get("SELECT * FROM users WHERE id = ?", [id], callback);
  },

  create: (user, callback) => {
    db.run(
      "INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
      [user.email, user.password, user.name],
      callback
    );
  },

  update: (id, user, callback) => {
    db.run(
      "UPDATE users SET email = ?, password = ?, name = ? WHERE id = ?",
      [user.email, user.password, user.name, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run("DELETE FROM users WHERE id = ?", [id], callback);
  },
};

export default db;
