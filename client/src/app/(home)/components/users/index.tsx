import "./users.css";
export default function Users() {
  return (
    <section className="use-cases" id="use-cases">
      <div className="container">
        <div className="section-title">
          <h2>Для кого создан наш сервис</h2>
          <p>VoteEasy подходит для самых разных задач и сфер деятельности</p>
        </div>
        <div className="cases-grid">
          <div className="case-card">
            <h3>Бизнес и корпорации</h3>
            <p>
              Сбор мнений сотрудников, выбор лучших идей, принятие коллективных
              решений
            </p>
          </div>
          <div className="case-card">
            <h3>Образование</h3>
            <p>
              Опросы студентов, голосования в учебных заведениях,
              исследовательские проекты
            </p>
          </div>
          <div className="case-card">
            <h3>Мероприятия</h3>
            <p>
              Интерактивные голосования на конференциях, вебинарах и встречах
            </p>
          </div>
          <div className="case-card">
            <h3>Сообщества</h3>
            <p>
              Клубы по интересам, некоммерческие организации, группы в соцсетях
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
