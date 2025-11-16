"use client";
import Link from "next/link";
import "./style.css";
import React, { useEffect, useRef } from "react";
import { useAuthStore } from "@/lib/store";

export default function Page() {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const login = useAuthStore((state) => state.login);

  function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = inputNameRef.current?.value;
    const password = inputPasswordRef.current?.value;
    const success = login(name!, password!);
    if (!name || !password) {
      alert("Введите имя пользователя и пароль");
      return;
    }
    alert("Пользователь вошел");
  }

  function handleOpenPassword() {
    const passwordInput = inputPasswordRef.current;
    if (passwordInput) {
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
    }
  }

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <h1 className="login-title">Логин</h1>
          <form onSubmit={handleRegistration} className="login-form">
            <div className="form-group">
              <input
                ref={inputNameRef}
                type="text"
                placeholder="Имя пользователя"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                ref={inputPasswordRef}
                type="password"
                placeholder="Пароль"
                className="form-input"
              />
              <span onClick={handleOpenPassword} className="password-toggle">
                показать пароль
              </span>
            </div>

            <button type="submit" className="submit-button">
              Войти
            </button>
          </form>

          <div className="links-container">
            <Link href="/registration" className="link">
              Регистрация
            </Link>
            <Link href="/forgot-password" className="link">
              Забыли пароль?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
