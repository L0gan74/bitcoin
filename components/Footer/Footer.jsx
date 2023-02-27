import Link from "next/link";
import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.block}>
          <div className={style.item}>
            <p className={style.top}>BTCA</p>
            <ul>
              <li>
                <Link href="/proof">Продвинутый Proof of Stake</Link>
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
            <div className={style.images}>
              <Image src="/android.svg" width={15} height={18} alt="photo" />
              <Image src="/Iphone.svg" width={16} height={20} alt="photo" />
              <Image src="/Linux.svg" width={16} height={20} alt="photo" />
              <Image src="/Winda.svg" width={16} height={16} alt="photo" />
            </div>
            <p className={style.description}>
              BTCA - это децентрализованная, одноранговая валюта с открытым
              исходным кодом, отличающаяся расширенными функциями
              конфиденциальности
            </p>
            <div className={style.link}>
              <Image src="/facebook.svg" width={32} height={32} alt="photo" />
              <Image src="/twit.svg" width={32} height={32} alt="photo" />
              <Image src="/inst.svg" width={32} height={32} alt="photo" />
              <Image src="/yout.svg" width={32} height={32} alt="photo" />
              <Image src="/github.svg" width={32} height={32} alt="photo" />
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <p>© 2019-2021 BTCA Community & BTCA Foundation</p>
          <p>Created by BTCA Community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
