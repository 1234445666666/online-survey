import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { env } from "../config/env";
import { findByName, createUser } from "../models/user";

const dbDir = path.dirname(env.DB_PATH);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(env.DB_PATH, (err) => {
  if (err) console.error("DB Error:", err);
  else console.log("DB Connected:", env.DB_PATH);
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS poll (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task TEXT NOT NULL,
      done INTEGER DEFAULT 0,
      user_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);
});

export default db;
