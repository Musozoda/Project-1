import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../Images/logo.png";
import facebook from "../Images/facebook.png";
import odnoklassniki from "../Images/odnoklassniki.png";
import twiter from "../Images/twiter.png";
import vk from "../Images/vk.png";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [t, i18n] = useTranslation("");

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  return (
    <div className="dark:bg-[gray] ">
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="container1">
        <div className="container11 flex items-center justify-between py-[11px] xl:justify-end font-[400] text-[14px] text-[#728399] dark:text-white leading-[18px]">
          <ul className="flex items-center gap-[66px] xl:hidden">
            <li>Партнерам</li>
            <li>Центр обучения</li>
            <li>Вопросы и ответы</li>
            <li>Доставка и оплата</li>
          </ul>
          <div className="flex items-center gap-[34px]">
            <p>Вход</p>
            <p>Реферальная программа</p>
          </div>
        </div>
      </div>
      {/* <nav>

        </nav> */}
      <Outlet />

      <footer className="container1">
        <div className="container11 flex items-start justify-between p-[113px_0_28px_0] xl:flex-wrap xl:justify-center xl:gap-[75px]">
          <div className="max-w-[370px] flex flex-col gap-[60px]">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" flex flex-col gap-[10px] items-start">
              <img src={logo} alt="" />
              <div className="flex flex-col gap-[21px]">
                <p className="font-[400] text-[14px] text-[#728399] dark:text-white leading-[18px]">
                  {t(
                    "Инновационные решения для восстановления, питания и уходу за волосами головы, бровей и бороды"
                  )}
                </p>
                <h1 className="font-[700] text-[16px] text-[#304560] dark:text-white leading-[24px]">
                  {t("Следите за нами в соц сетях")}
                </h1>
                <div className="flex items-center gap-[23px]">
                  <img src={facebook} alt="" />
                  <img src={odnoklassniki} alt="" />
                  <img src={twiter} alt="" />
                  <img src={vk} alt="" />
                </div>
              </div>
            </div>
            <p className="font-[400] text-[14px] text-[#728399] dark:text-white leading-[18px]">
              {t("Copyright © 2021 Charismo Russia")}
            </p>
          </div>
          <div className="flex flex-col gap-[49px]">
          <div className="flex items-start gap-[48px]">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[19px]">
              <h1 className=" font-[700] text-[20px] text-[#304560] dark:text-white leading-[24px]">{t("Страницы")}</h1>
              <ul className="flex flex-col gap-[15px] font-[400] text-[18px] text-[#728399] dark:text-white leading-[23px]">
                <li>
                  <Link to="/">Главная</Link>
                </li>

                <li>
                  <Link to="/Shop">Магазин</Link>
                </li>
                <li>
                  <Link to="/Help">Вопросы и ответы</Link>
                </li>
                <li>
                  <Link to="/Feedback">Отзывы</Link>
                </li>
                <li>
                  <Link to="/Contacts">Контакты</Link>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[19px]">
              <h1 className=" font-[700] text-[20px] text-[#304560] dark:text-white leading-[24px]">{t("Продукты")}</h1>
              <ul className="flex flex-col gap-[15px] font-[400] text-[18px] text-[#728399] dark:text-white leading-[23px]">
                <li>
                Dekobrow
                </li>

                <li>
                DekoHair
                </li>
                <li>
                DekoPill
                </li>
                <li>
                DekoBeard
                </li>

              </ul>
            </div>
          </div>
          <p className="font-[400] text-[14px] text-[#728399] dark:text-white leading-[18px]">
              {t("Политика обработки персональных данных")}
            </p>
          </div>

          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[19px]">
            <h1 className="font-[700] text-[20px] text-[#304560] dark:text-white leading-[24px]">
                {t("Будьте в курсе всех новостей")}
            </h1>
            <form data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col w-[100%] gap-[12px]">
                <input className="p-[9px_20px] rounded-[5px] border-[1px] border-solid outline-none border-[#DEDEDE]" type="text" name="" id="" placeholder={t("Ваш E-mail")}/>
                <button className="py-[11px] flex items-center justify-center bg-[#2389FF] rounded-[5px] text-white">
                    {t("Подписаться")}
                </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
