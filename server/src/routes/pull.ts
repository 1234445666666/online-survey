// routes/todos.js
import express from "express";
import { usersDB } from "../db/database"; // Импортируем БД

const router = express.Router();

// Логирование запросов
router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// GET /todos - Все задачи
router.get("/todos", (req, res) => {
  usersDB.getAll((err, todos) => {
    if (err) return res.status(500).json({ error: "Ошибка БД" });
    res.json(todos);
  });
});

// GET /todos/:id - Одна задача
router.get("/todos/:id", (req, res) => {
  usersDB.getById(req.params.id, (err, todo) => {
    if (err) return res.status(500).json({ error: "Ошибка БД" });
    if (!todo) return res.status(404).json({ error: "Не найдено" });
    res.json(todo);
  });
});

// POST /todos - Создать
router.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task || task.length < 3) {
    return res.status(400).json({ error: "Задача короткая!" });
  }

  usersDB.create(task, function (err) {
    if (err) return res.status(500).json({ error: "Ошибка создания" });

    // Получаем новую задачу
    usersDB.getById(this.lastID, (err, todo) => {
      res.status(201).json(todo);
    });
  });
});

// PUT /todos/:id - Обновить
router.put("/todos/:id", (req, res) => {
  usersDB.update(req.params.id, req.body.done, function (err) {
    if (err) return res.status(500).json({ error: "Ошибка обновления" });
    if (this.changes === 0)
      return res.status(404).json({ error: "Не найдено" });

    usersDB.getById(req.params.id, (err, todo) => {
      res.json(todo);
    });
  });
});

// DELETE /todos/:id - Удалить
router.delete("/todos/:id", (req, res) => {
  usersDB.delete(req.params.id, function (err) {
    if (err) return res.status(500).json({ error: "Ошибка удаления" });
    if (this.changes === 0)
      return res.status(404).json({ error: "Не найдено" });
    res.json({ message: "Удалено!" });
  });
});

// 404
router.use((req, res) => {
  res.status(404).json({ error: "Маршрут не найден" });
});

export default router;
