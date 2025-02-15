import Gmail from "./images/icons/Gmail.svg";
import Whats from "./images/icons/WhatsApp.svg";
import Teleg from "./images/icons/Telegram.svg";

export default function Contact() {
  return (
    <div className="footer_container">
      <h2 className="contact_title">Контакты</h2>
      <h4 className="contact_subtitle">
        Свяжитесь с нами удобным для вас способом – мы всегда на связи и готовы
        помочь с любыми вопросами!
      </h4>
      <div className="contact_block">Как с нами связаться?</div>
      <div className="footer_icons">
        <div className="contact_container">
          Email – для вопросов, заказов и сотрудничества.
          <a href="mailto:usabuyerslavic@gmail.com">
            <img className="contact" src={Gmail} alt="Gmail" />
          </a>
        </div>
        <div className="contact_container">
          WhatsApp – удобно для связи и консультаций.
          <a href="https://api.whatsapp.com/send/?phone=12136186550&text&type=phone_number&app_absent=0">
            <img className="contact" src={Whats} alt="Whats" />
          </a>
        </div>
        <div className="contact_container">
          Telegram - напишите нам в чат, и мы оперативно ответим!
          <a href="https://t.me/usabuyerslavic">
            <img className="contact" src={Teleg} alt="Telegramm" />
          </a>
        </div>
      </div>
      <div className="footer_author">© 2025 USAbuyer</div>
    </div>
  );
}
