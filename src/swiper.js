import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Vikup from "./images/Vikup.png";
import Oplata from "./images/Oplata.png";
import Consult from "./images/Consult.png";
import Proverka from "./images/Proverka.png";
import Peresil from "./images/Peresil.png";

const Services = () => {
  return (
    <div>
      <h2 className="service_title">Наши услуги</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30} // Сделаем меньшее расстояние
        navigation
        pagination={{ type: "progressbar" }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2.5,
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="service_card">
            <img className="slide_picture" src={Vikup} alt="Slide 1" />
            <div className="slide_info">
              <h2 className="slide_title">Выкуп товаров из США</h2>
              <p className="slide_text">
                Заказываем продукцию с любых американских сайтов, включая
                Amazon, eBay, официальные магазины брендов, а также редкие
                площадки.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service_card">
            <img className="slide_picture" src={Oplata} alt="Slide 2" />
            <div className="slide_info">
              <h2 className="slide_title">Оплата заказов</h2>
              <p className="slide_text">
                Выкупим товар за вас, даже если магазин не принимает российские,
                украинские или казахстанские карты.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service_card">
            <img className="slide_picture" src={Consult} alt="Slide 3" />
            <div className="slide_info">
              <h2 className="slide_title">Консультации и подбор</h2>
              <p className="slide_text">
                Поможем найти лучшие варианты по цене и качеству, подберем
                альтернативы, если нужный товар отсутствует.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service_card">
            <img className="slide_picture" src={Proverka} alt="Slide 4" />
            <div className="slide_info">
              <h2 className="slide_title">Проверка товаров</h2>
              <p className="slide_text">
                Перед отправкой проверяем соответствие заказа, качество и
                надежность упаковки.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service_card">
            <img className="slide_picture" src={Peresil} alt="Slide 5" />
            <div className="slide_info">
              <h2 className="slide_title">Консолидация и пересылка</h2>
              <p className="slide_text">
                Объединим несколько ваших заказов в одну посылку, чтобы
                сэкономить на доставке.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
