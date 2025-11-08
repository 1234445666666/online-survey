import "./header.css";
export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">SimpleVote</div>
          <div className="nav-links">
            <a href="#features">Возможности</a>
            <a href="#how-it-works">Как это работает</a>
            <a href="#use-cases">Примеры использования</a>
            <a href="#pricing">Тарифы</a>
          </div>
          <div className="auth-buttons">
            <button className="btn btn-outline">Войти</button>
            <button className="btn btn-primary">Регистрация</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
