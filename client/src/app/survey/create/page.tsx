"use client";
import "./style.css";
export default function Page() {
  return (
    <div className="create-survey-page">
      <div className="container">
        <div className="survey-form-container">
          <h1 className="survey-title">Создание опроса</h1>
          <form className="survey-form">
            {/* Поле вопроса */}
            <div className="form-group">
              <label htmlFor="question" className="form-label">
                Вопрос опроса
              </label>
              <input
                type="text"
                id="question"
                placeholder="Введите ваш вопрос..."
                className="form-input"
              />
            </div>

            {/* Варианты ответов */}
            <div className="form-group">
              <label className="form-label">Варианты ответов</label>
              <div className="options-container">
                <input
                  type="text"
                  placeholder="Вариант ответа 1"
                  className="form-input option-input"
                />
                <input
                  type="text"
                  placeholder="Вариант ответа 2"
                  className="form-input option-input"
                />
                <input
                  type="text"
                  placeholder="Вариант ответа 3"
                  className="form-input option-input"
                />
                <button type="button" className="btn-add-option">
                  + Добавить вариант
                </button>
              </div>
            </div>

            {/* Настройки приватности */}
            <div className="form-group">
              <label className="form-label">Настройки доступа</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="privacy"
                    value="public"
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">Публичный опрос</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="privacy"
                    value="private"
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">Приватный опрос</span>
                </label>
              </div>
            </div>

            {/* Кнопки */}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Создать опрос
              </button>
              <button type="button" className="btn btn-outline">
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
