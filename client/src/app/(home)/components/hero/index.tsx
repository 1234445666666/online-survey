"use client";
import { useRouter } from "next/navigation";
import "./hero.css";
export default function Hero() {
  const router = useRouter();
  function createPoll() {
    router.push("/survey/create");
  }
  return (
    <section className="hero">
      <div className="container">
        <h1>Создавайте опросы за 60 секунд</h1>
        <p>
          Платформа для быстрых и эффективных онлайн-голосований. Собирайте
          мнения коллег, друзей или клиентов в приватных или публичных опросах.
        </p>
        <div className="hero-buttons">
          <button onClick={createPoll} className="btn btn-light">
            Создать опрос
          </button>
          <button className="btn btn-outline">Узнать больше</button>
        </div>
      </div>
    </section>
  );
}
