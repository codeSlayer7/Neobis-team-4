import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import LangugeDropdown from "../langdropdawn";
import CardsBox from "./cards/cardsSection";
import s from "./index.module.css";

function Main() {
  const languages = [
    {
      code: "ru",
      name: "Русский",
    },
    {
      code: "eng",
      name: "English",
    },
  ];

  return (
    <div className="main">
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.header__inner}>
            <div className={s.headers}>
              <img className={s.header__logo} src={Logo} />
              <nav className={s.nav}>
                <a className={s.nav__link} href="#">
                  Места
                </a>
                <a className={s.nav__link} href="#">
                  Блог
                </a>
                <a className={s.nav__link} href="#">
                  Безопасность
                </a>
                <a className={s.nav__link} href="#">
                  Избранное
                </a>
              </nav>
              <div className={s.nav__flag}>
                <LangugeDropdown languages={languages} />
                <h4 className="nav__link_text">En/Rus</h4>
              </div>
              <Link to="/login">
                <a className={s.nav__btn}>Войти</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={s.intro}>
        <div className={s.container}>
          <h2 className={s.intro__title}>Life is a great ADVENTURE</h2>
        </div>
      </div>
      <CardsBox />
    </div>
  );
}

export default Main;
