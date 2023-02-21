import React from "react";
import style from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.full}>
        <nav className={style.nav}>
          <Link href="/">
            <Image src="Logo.svg" width={42} height={42} alt="Logo" />
          </Link>
          <ul>
            <li>
              <Link href="/">Функции</Link>
            </li>
            <li>
              <Link href="/Proof">Кошельки</Link>
            </li>
            <li>
              <Link href="/">Участие</Link>
            </li>
            <li>
              <Link href="/">Ресурсы</Link>
            </li>
            <li>
              <Link href="/">Новости</Link>
            </li>
            <li>
              <Link href="/">О BTCA</Link>
            </li>
          </ul>
        </nav>
        <div className={style.right}>
          <div className={style.language}>
            <Image src="language.svg" width={14} height={14} alt="language" />
            <span>RUS</span>
          </div>
          <div className={style.wallet}>
            <Image src="Bitk.svg" width={14} height={14} alt="Bitk" />
            <span>10.834</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
