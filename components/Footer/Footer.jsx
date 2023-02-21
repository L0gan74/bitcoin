import Link from "next/link";
import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.block}>
          <div className={style.item}>
            <p className={style.top}>BTCA</p>
            <ul>
              <li>
                <Link href="/">Продвинутый Proof of Stake</Link>
              </li>
              <li>
                <Link href="/">Холодный стекинг</Link>
              </li>
              <li>
                <Link href="/">Конфиденциальность Shield</Link>
              </li>
              <li>
                <Link href="/">Загрузки</Link>
              </li>
              <li>
                <Link href="/">Мастерноды</Link>
              </li>
              <li>
                <Link href="/">Мерчанты</Link>
              </li>
              <li>
                <Link href="/">Биржи</Link>
              </li>
            </ul>
          </div>
          <div className={style.item}>
            <p className={style.top}>
              <ul>
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
              </ul>
            </p>
          </div>
          <div className={style.item}>
            <p className={style.top}>Саппорт</p>
            <ul>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Саппорт</Link>
              </li>
              <li>
                <Link href="/">Комьюнити</Link>
              </li>
              <li>
                <Link href="/">Почему BTCA</Link>
              </li>
              <li>
                <Link href="/">O BTCA</Link>
              </li>
            </ul>
          </div>
          <div className={style.item}>
            <p className={style.top}>Документация</p>
            <ul>
              <li>
                <Link href="/">Документы</Link>
              </li>
              <li>
                <Link href="/">Terms of Use</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Legal Notices</Link>
              </li>
            </ul>
          </div>
          <div className={style.item}>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
