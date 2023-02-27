import React from "react";
import style from "./Proof.module.css";
import Image from "next/image";

const Proof = () => {
  return (
    <main className={style.main}>
      <div className={style.description}>
        <div className="container">
          <div className={style.text}>
            <span>
              <h1>Proof of Stake</h1>
              <p>
                Получайте вознаграждения за безопасность сети BTCA, просто храня
                монеты в своем кошельке.
              </p>
            </span>

            <div className={style.money}>
              <Image
                src="/proofMain.png"
                width={621}
                height={484}
                alt="money"
              />
            </div>
          </div>
          <div className={style.more}>
            <p className={style.big}>Increase</p>
            <div className={style.moreBlock}>
              <div className={style.header}>
                <div className={style.moreText}>
                  <h2>Получить больше Владея малым</h2>
                  <p>
                    Независимо от того, являетесь ли вы разработчиком,
                    мерчантом, конечным пользователем или покупателем окон, мы
                    приветствуем вас в сообществе BTCA.
                  </p>
                </div>
                <div className={style.agreement}>
                  <span>
                    <h5>Согласованное Время Блока</h5>
                    <svg
                      width="74"
                      height="74"
                      viewBox="0 0 74 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_7133_2227)">
                        <rect
                          x="18"
                          y="1"
                          width="42"
                          height="42"
                          rx="12"
                          fill="white"
                          fill-opacity="0.42"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M34.2071 12.7929C34.5976 13.1834 34.5976 13.8166 34.2071 14.2071L31.2071 17.2071C30.8166 17.5976 30.1834 17.5976 29.7929 17.2071L28.2929 15.7071C27.9024 15.3166 27.9024 14.6834 28.2929 14.2929C28.6834 13.9024 29.3166 13.9024 29.7071 14.2929L30.5 15.0858L32.7929 12.7929C33.1834 12.4024 33.8166 12.4024 34.2071 12.7929Z"
                          fill="white"
                        />
                        <path
                          d="M37 14H49C49.5523 14 50 14.4477 50 15C50 15.5523 49.5523 16 49 16H37C36.4477 16 36 15.5523 36 15C36 14.4477 36.4477 14 37 14Z"
                          fill="white"
                        />
                        <path
                          d="M36 22C36 21.4477 36.4477 21 37 21H49C49.5523 21 50 21.4477 50 22C50 22.5523 49.5523 23 49 23H37C36.4477 23 36 22.5523 36 22Z"
                          fill="white"
                        />
                        <path
                          d="M37 28C36.4477 28 36 28.4477 36 29C36 29.5523 36.4477 30 37 30H49C49.5523 30 50 29.5523 50 29C50 28.4477 49.5523 28 49 28H37Z"
                          fill="white"
                        />
                        <path
                          d="M28 22C28 20.3431 29.3431 19 31 19C32.6569 19 34 20.3431 34 22C34 23.6569 32.6569 25 31 25C29.3431 25 28 23.6569 28 22Z"
                          fill="white"
                        />
                        <path
                          d="M28 29C28 27.3431 29.3431 26 31 26C32.6569 26 34 27.3431 34 29C34 30.6569 32.6569 32 31 32C29.3431 32 28 30.6569 28 29Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_7133_2227"
                          x="0"
                          y="0"
                          width="74"
                          height="74"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="-2" dy="15" />
                          <feGaussianBlur stdDeviation="8" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_7133_2227"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_7133_2227"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                  <p>
                    Фиксированный интервал между блоками составляет 60 секунд.
                    Протокол времени 2-ой версии значительно сокращает разброс
                    фактического интервала между блоками.
                  </p>
                </div>
              </div>
              <div className={style.bottom}>
                <div className={style.bottomItem}>
                  <span className={style.bottomItemHeader}>
                    Безопасная Сеть
                    <span>
                      <Image
                        src="/bottomItem_1.svg"
                        width={24}
                        height={24}
                        alt="img"
                      />
                    </span>
                  </span>
                  <p>
                    Распределенная сеть отдельных узлов обеспечивает проверку
                    каждой транзакции и блока, добавляемого в блокчейн,
                    гарантируя, что блоки и транзакции действительны.
                  </p>
                </div>
                <div className={style.bottomItem}>
                  <span className={style.bottomItemHeader}>
                    Меньшее потребление энергии
                    <span>
                      <Image
                        src="/bottomItem_2.svg"
                        width={24}
                        height={24}
                        alt="img"
                      />
                    </span>
                  </span>
                  <p>
                    Фиксированный интервал между блоками составляет 60 секунд.
                    Протокол времени 2-ой версии значительно сокращает разброс
                    фактического интервала между блоками.
                  </p>
                </div>
                <div className={style.bottomItem}>
                  <span className={style.bottomItemHeader}>
                    Честный Стекинг
                    <span>
                      <Image
                        src="/bottomItem_3.svg"
                        width={24}
                        height={24}
                        alt="img"
                      />
                    </span>
                  </span>
                  <p>
                    У каждого UTXO есть шанс выиграть ставку с линейным
                    снижением сложности в зависимости от ценности UTXO.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className={style.moreFon}
          src="/moreBack.png"
          width={1500}
          height={330}
          alt="img"
        />
      </div>
      <div className={style.staking}>
        <div className="container">
          <div className={style.stakingBlock}>
            <div className={style.stakingBlockLeft}>
              <span>
                <h2>Staking Rewards</h2>
                <p>
                  Estimate your rewards and see how simple it is to receive
                  staking rewards with BTCA
                </p>
              </span>
              <p className={style.stakingTxtBottom}>
                There is no way to know how many nodes are running on the
                network, and how much PIV is being staked at any given time, so
                these calculations are educated estimates.
              </p>
            </div>
            <div className={style.stakingBlockRight}>
              <span className={style.stakingRightTop}>
                Total BTCA staked
                <h2>10 000</h2>
              </span>
              <p className={style.estimated}>Estimated 6.5% annual reward</p>
              <div className={style.price}>
                <div className={style.priceItem}>
                  <span className={style.priceItemDesc}>Daily rewards:</span>
                  <span className={style.priceItemPrice}>1.343945 BTCA</span>
                </div>
                <div className={style.priceItem}>
                  <span className={style.priceItemDesc}>Weekly rewards:</span>
                  <span className={style.priceItemPrice}>23.343945 BTCA</span>
                </div>
                <div className={style.priceItem}>
                  <span className={style.priceItemDesc}>Monthly rewards:</span>
                  <span className={style.priceItemPrice}>23.343945 BTCA</span>
                </div>
                <div className={style.priceItem}>
                  <span className={style.priceItemDesc}>Yearly rewards:</span>
                  <span className={style.priceItemPrice}>23.343945 BTCA</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.application}>
            <div className={style.applicationItem}>
              <p className={style.applicationItemTitle}>Надежный и Простой</p>
              <h3>Холодный Стекинг</h3>
              <p className={style.applicationItemDesc}>
                Делегируйте ваши BTCA для стекинга на горячий кошелек, сохраняя
                при этом полный контроль и безопасность ваших BTCA в
                оффлайн-режиме.
              </p>
              <button className={style.stackBtn} type="button">
                Холодный Стекинг
              </button>
              <Image
                src="/stackItem_1.png"
                width={160}
                height={220}
                alt="img"
              />
            </div>
            <div className={style.applicationItem}>
              <p className={style.applicationItemTitle}>Специализированные</p>
              <h3>Мастерноды</h3>
              <p className={style.applicationItemDesc}>
                Мастерноды BTCA предоставляют дополнительные узлы для проверки
                блоков и транзакций, повышая безопасность распределенной сети.
              </p>
              <button type="button">Мастерноды</button>
              <Image
                src="/stackItem_1.png"
                width={160}
                height={220}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.documentation}>
        <div className="container"></div>
      </div>
    </main>
  );
};

export default Proof;
