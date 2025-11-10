import "./work.css";
export default function Work() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>Как это работает</h2>
          <p>Создать и провести опрос - проще простого</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Зарегистрируйтесь</h3>
            <p>Быстрая регистрация за 30 секунд</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Создайте опрос</h3>
            <p>Добавьте вопрос и варианты ответов</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Настройте доступ</h3>
            <p>Выберите приватный или публичный формат</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Поделитесь ссылкой</h3>
            <p>Отправьте приглашение участникам</p>
          </div>
        </div>
      </div>
    </section>
  );
}
