import React from "react";
import Logo from "./images/buyer-logo.png";

function Navbar({ scrollToRef, refs }) {
  return (
    <div className="navbar_container">
      <img className="logo_picture" src={Logo} alt="Logo" />
      <div className="navbar_content">
        <div className="nav" onClick={() => scrollToRef(refs.mainRef)}>
          Главная
        </div>
        <div className="nav" onClick={() => scrollToRef(refs.servicesRef)}>
          Услуги
        </div>
        <div className="nav" onClick={() => scrollToRef(refs.questionsRef)}>
          Частые вопросы
        </div>
        <div className="nav" onClick={() => scrollToRef(refs.aboutRef)}>
          О нас
        </div>
        <div className="nav" onClick={() => scrollToRef(refs.contactRef)}>
          Контакты
        </div>
      </div>
    </div>
  );
}

export default Navbar;
