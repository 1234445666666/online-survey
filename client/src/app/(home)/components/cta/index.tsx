"use client";
import { useAuthStore } from "@/lib/store";
import "./cta.css";
import { useRouter } from "next/navigation";
export default function Cta() {
  const authUser = useAuthStore((state) => state.isAuthenticated);

  const router = useRouter();
  function createPoll() {
    router.push("/survey/create");
  }
  return (
    <section className="cta">
      <div className="container">
        <h2>Начните использовать VoteEasy уже сегодня</h2>
        <p>
          Присоединяйтесь к тысячам организаций, которые уже упростили процесс
          сбора мнений с помощью нашей платформы
        </p>
        {authUser ? (
          <button
            onClick={() => router.push("/survey/create")}
            className="btn btn-light"
          >
            Создать опрос
          </button>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="btn btn-light"
          >
            Создать опрос
          </button>
        )}
      </div>
    </section>
  );
}
