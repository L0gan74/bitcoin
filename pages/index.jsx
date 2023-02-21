import React from "react";
import style from "../styles/main.module.css";
import Image from "next/image";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.description}>
        <Image
          className={style.planet}
          width={749}
          height={900}
          src="/planet.png"
          alt="planet"
        />
        <div className="container">
          <div className={style.text}>
            <span>
              <h1>Становитесь своим собственным банком</h1>
              <p>
                Получите свободу, благодаря конфиденциальным, глобальным
                цифровым деньгам. Становитесь своим собственным банком с полным
                контролем над своими цифровыми активами.
              </p>
            </span>

            <div className={style.money}>
              <Image src="/money.png" width={394} height={390} alt="money" />
            </div>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={24}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide className={style.slide}>
              <div className={style.card}>
                <p className={style.title}>Помогите зашитить сеть</p>
                <h6 className={style.bold}>И получите вознаграждение</h6>
                <p className={style.description_txt}>
                  An improbable, overnight rise has established a new token as a
                  blockchain gaming heavyweight.
                </p>
                <button type="button" className={style.card_btn}>
                  Перейти и получить
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
              <h1>123</h1>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
              <h1>123</h1>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
              <h1>123</h1>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <BsFillArrowRightCircleFill name="arrow-forward-outline"></BsFillArrowRightCircleFill>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      <div className={style.support}>
        <p className={style.backgraund}>ПАРТНЕРЫ</p>
        <div className="container">
          <div className={style.supportDesc}>
            <div className={style.supportDescText}>
              <h2>Нас поддерживают</h2>
              <p>
                Получите свободу, благодаря конфиденциальным, глобальным
                цифровым деньгам. Становитесь своим собственным банком с полным
                контролем над своими цифровыми активами.
              </p>
              <Image src="/Tips.png" width={493} height={72} alt="photo" />
            </div>
            <Image src="/desck.png" width={538} height={504} alt="photo" />
          </div>
        </div>
      </div>
      <div className={style.wallet}>
        <div className="container">
          <div className={style.walletBlock}>
            <div className={style.walletText}>
              <h2>Кошелек и Инструменты</h2>
              <p>
                BTCA предоставляет вам инструменты и ресурсы, чтобы вы всегда
                могли контролировать свои средства.
              </p>
              <div className={style.walletImg}>
                <Image src="/android.svg" width={30} height={34} alt="photo" />
                <Image src="/Iphone.svg" width={26} height={32} alt="photo" />
                <Image src="/Linux.svg" width={26} height={32} alt="photo" />
                <Image src="/Winda.svg" width={26} height={26} alt="photo" />
              </div>
              <button type="button">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 27 32"
                  fill="#636D85"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.1605 5.12802C17.0437 6.47152 15.2569 7.53118 13.4701 7.3798C13.2467 5.56324 14.1215 3.63313 15.1452 2.44101C16.262 1.05966 18.2163 0.0756903 19.7984 0C19.9845 1.89226 19.2586 3.74667 18.1605 5.12802ZM19.7798 7.73933C17.1926 7.58795 14.9777 9.23421 13.7493 9.23421C12.5022 9.23421 10.6224 7.81502 8.57498 7.85287C5.91338 7.89071 3.43791 9.42344 2.07919 11.8645C-0.712699 16.7465 1.3533 23.9749 4.05212 27.9486C5.37362 29.9166 6.95569 32.0738 9.0403 31.9981C11.0132 31.9224 11.795 30.6924 14.1774 30.6924C16.5784 30.6924 17.2671 31.9981 19.3517 31.9602C21.5107 31.9224 22.8694 29.9923 24.1909 28.0243C25.6986 25.7915 26.3128 23.6154 26.35 23.5018C26.3128 23.464 22.1808 21.8556 22.1436 17.0114C22.1063 12.962 25.4008 11.0319 25.5497 10.9183C23.6884 8.11778 20.7848 7.81502 19.7798 7.73933Z" />
                </svg>
                Скачать кошелек
              </button>
            </div>
            <Image src="/wallerImg.png" width={655} height={452} alt="photo" />
          </div>
        </div>
      </div>
      <div className={style.ready}>
        <p className={style.readyFon}>Ready?</p>
        <div className="container">
          <div className={style.readyHeader}>
            <h2>Готовы начать?</h2>
            <p>
              Независимо от того, являетесь ли вы разработчиком, мерчантом,
              конечным пользователем или покупателем окон, мы приветствуем вас в
              сообществе BTCA.
            </p>
          </div>
          <div className={style.readyBlock}>
            <div className={style.readyItem}>
              <div className={style.readyItemTop}>
                <p className={style.readyItemHeader}>
                  1 <span>шаг</span>
                </p>
                <span className={style.hr}></span>
              </div>
              <h3>Скачайте приложение</h3>
              <Image
                src="/readyItem_1.png"
                width={121}
                height={192}
                alt="photo"
              />
            </div>
            <div className={style.readyItem}>
              <div className={style.readyItemTop}>
                <p className={style.readyItemHeader}>
                  2 <span>шаг</span>
                </p>
                <span className={style.hr}></span>
              </div>
              <h3>Регестрируйтесь</h3>
              <Image
                src="/readyItem_2.png"
                width={208}
                height={160}
                alt="photo"
              />
            </div>
            <div className={style.readyItem}>
              <div className={style.readyItemTop}>
                <p className={style.readyItemHeader}>
                  3 <span>шаг</span>
                </p>
                <span className={style.hr}></span>
              </div>
              <h3>Пользуйтесь</h3>
              <Image
                src="/readyItem_3.png"
                width={180}
                height={180}
                alt="photo"
              />
            </div>
          </div>
          <div className={style.update}>
            <h2>Никогда не пропускайте обновления</h2>
            <p>
              Подпишитесь на информационный бюллетень и будьте первым, кто
              получит новейшие оповещения, объявления и обновления о разработках
              BTCA.
            </p>
            <form className={style.mail}>
              <input type="email" placeholder="Ваш e-mail" required />
              <button type="submit">Подписаться</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
