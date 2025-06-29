import React from "react";
import logofooter from "../../assets/images/footerlogo.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--block1">
            <img src={logofooter} alt="img" width={150} />
            <button>Вступить в сообщество</button>
          </div>
          <div className="footer--block2">
            <h1>Главное</h1>
            <p>
              О TMDB <br /> Связаться с нами <br /> Форумы поддержки <br /> API
              Documentation <br /> Статус системы
            </p>
          </div>
          <div className="footer--block3">
            <h1>Участвуйте</h1>
            <p>
              Библия редакторов <br /> Добавить новый фильм <br /> Добавить
              новый сериал
            </p>
          </div>
          <div className="footer--block4">
            <h1>Сообщество</h1>
            <p>
              Руководства <br /> Обсуждения <br /> Доска почёта
            </p>
          </div>
          <div className="footer--block5">
            <h1>О праве</h1>
            <p>
              Условия использования <br /> API Правила использования <br />
              Политика конфиденциальности <br /> DMCA Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
