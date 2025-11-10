import "./header.css";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">SimpleVote</div>
          <div className="nav-links">
            <Link href="#features">Возможности</Link>
            <Link href="#how-it-works">Как это работает</Link>
            <Link href="#use-cases">Примеры использования</Link>
          </div>
          <div className="auth-buttons">
            <button className="btn btn-login">Войти</button>
            <button className="btn btn-register">Регистрация</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
