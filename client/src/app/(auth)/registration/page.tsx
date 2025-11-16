"use client";
import "./style.css";
import React, { useRef } from "react";
import { useAuthStore } from "@/lib/store";

type Password = {
  passOne: string | number;
  passTwo: string | number;
};

export default function Page() {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputConfirmPasswordRef = useRef<HTMLInputElement>(null);

  const register = useAuthStore((state) => state.register);

  function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = inputNameRef.current?.value;
    const password = inputPasswordRef.current?.value;
    const passwordConfirm = inputConfirmPasswordRef.current?.value;
    checkingPasswords(password, passwordConfirm);
    register(name!, password!);
    alert("Пользователь зарегистрирован");
  }

  function checkingPasswords(passOne, passTwo) {
    if (passOne !== passTwo) {
      alert("Пароли не совпадают");
      return false;
    }
    return true;
  }

  function handleLogin() {
    window.location.href = "/login";
  }
  return (
    <div className="registration-page">
      <div className="container">
        <div className="registration-container">
          <h1 className="registration-title">Регистрация</h1>
          <p className="registration-subtitle">Создайте свой аккаунт</p>

          <form onSubmit={handleRegistration} className="registration-form">
            <div className="form-section">
              <h3 className="section-title">Данные для входа</h3>

              <div className="form-group">
                <label className="form-label">Имя пользователя </label>
                <input
                  ref={inputNameRef}
                  type="text"
                  placeholder="Придумайте логин"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Пароль </label>
                  <input
                    ref={inputPasswordRef}
                    type="password"
                    placeholder="Минимум 8 символов"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Подтвердите пароль </label>
                  <input
                    ref={inputConfirmPasswordRef}
                    type="password"
                    placeholder="Повторите пароль"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="password-requirements">
                <p className="requirements-title">Требования к паролю:</p>
                <ul className="requirements-list">
                  <li>Минимум 8 символов</li>
                  <li>Хотя бы одна заглавная буква</li>
                  <li>Хотя бы одна цифра</li>
                  <li>Хотя бы один специальный символ</li>
                </ul>
              </div>
            </div>

            <div className="form-section">
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" required />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">
                    Я принимаю{" "}
                    <a href="#" className="link-inline">
                      условия использования
                    </a>{" "}
                    и{" "}
                    <a href="#" className="link-inline">
                      политику конфиденциальности
                    </a>{" "}
                    *
                  </span>
                </label>

                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Создать аккаунт
              </button>
              <button
                onClick={handleLogin}
                type="button"
                className="btn btn-outline"
              >
                Уже есть аккаунт? Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
