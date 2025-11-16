import { useRouter } from "next/navigation";
import "./header.css";
import Link from "next/link";
import React, { useEffect } from "react";
export default function Header() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  const router = useRouter();

  function login() {
    router.push("/login");
  }

  function register() {
    router.push("/registration");
  }
  return (
    <header>
      <div className="container">
        {width > 1100 ? (
          <nav>
            <h1 className="logo">SimpleVote</h1>
            <div className="nav-links">
              <Link href="#features">Возможности</Link>
              <Link href="#how-it-works">Как это работает</Link>
              <Link href="#use-cases">Примеры использования</Link>
            </div>
            <div className="auth-buttons">
              <button onClick={login} className="btn btn-login">
                Войти
              </button>
              <button onClick={register} className="btn btn-register">
                Регистрация
              </button>
            </div>
          </nav>
        ) : (
          <div className="mobile-div">
            <h1 className="logo">SimpleVote</h1>
            <button onClick={toggleMenu} className="btn btn-login">
              {" "}
              x
            </button>
            {isOpen == true ? (
              <div className="burger-menu">
                <div className="nav-links">
                  <Link href="#features">Возможности</Link>
                  <Link href="#how-it-works">Как это работает</Link>
                  <Link href="#use-cases">Примеры использования</Link>
                </div>
                <div className="auth-buttons">
                  <button onClick={login} className="btn btn-login">
                    Войти
                  </button>
                  <button onClick={register} className="btn btn-register">
                    Регистрация
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
