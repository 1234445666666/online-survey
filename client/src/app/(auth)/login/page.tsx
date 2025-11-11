"use client";
import Link from "next/link";
import "./style.css";

export default function Page() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <h1 className="login-title">Логин</h1>
          <form className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Имя пользователя"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Пароль"
                className="form-input"
              />
              <span className="password-toggle">показать пароль</span>
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
