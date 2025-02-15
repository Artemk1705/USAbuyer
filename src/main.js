import "./index.css";

export default function Main({ scrollToRef, refs }) {
  return (
    <div>
      <div className="main_container">
        <div className="main_slog_container">
          <h1 className="main_slog_title">Доставка из США</h1>
          <h2 className="main_slog_title_2">Быстро, Выгодно, Надёжно!</h2>
          <p className="main_slog_info">
            Мы помогаем вам покупать оригинальные товары напрямую из США и
            доставляем их в Россию, Казахстан и Украину без лишних сложностей.
            Надёжный сервис, удобные способы оплаты и гарантированная доставка —
            ваш комфорт в каждом заказе!
          </p>
        </div>
        <button
          className="contact_button"
          onClick={() => scrollToRef(refs.contactRef)}
        >
          Связаться
        </button>
      </div>
    </div>
  );
}
