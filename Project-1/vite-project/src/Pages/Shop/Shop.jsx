import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../Images/logo.png";
import deko from "../../Images/DEKO.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Drawer1 from "../../components/Drawer/Drawer";
import cart from "../../Images/cart.png";
import Switcher from "../../components/Switcher/Switcher";
import BasicBreadcrumbs from "../../components/Bread/Bread";
import HalfRating from "../../components/Rating/Rating";

const Shop = () => {
  const [t, i18n] = useTranslation("");
  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <header className="container1">
        <div className="container11">
          <nav data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center justify-between py-[18px] relative z-20">
            <div className="flex items-center gap-[30px]">
              <img src={logo} alt="" />
              <ul className="flex xl:hidden items-center w-[545px] justify-between">
                <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
                  <Link to="/">{t("Главная")}</Link>
                </li>
                <li className="font-[700] text-[16px] text-[#2389FF] leading-[21px]">
                  <Link to="/Shop">{t("Магазин")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
                  <Link to="/Help">{t("Вопросы и ответы")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
                  <Link to="/Feedback">{t("Отзывы")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
                  <Link to="/Contacts">{t("Контакты")}</Link>
                </li>
              </ul>
            </div>

            <div className="hidden xl:block">
              <Drawer1 />
            </div>

            <div className="flex items-center gap-[14px] xl:hidden">
              <div className="flex items-center gap-[8px]">
                <button onClick={() => changeLanguage("en")}>En</button>
                <button onClick={() => changeLanguage("ru")}>Ru</button>
              </div>
              <div className="flex  items-center gap-[20px]">
                <img src={cart} alt="" />
                <button className="p-[15px_34px] border-[1px] border-solid border-[#2389FF] rounded-[8px] font-[400] text-[16px] text-[#304560] leading-[21px]">
                  Перезвоните мне
                </button>
              </div>
              <Switcher />
            </div>
          </nav>
        </div>
      </header>

      <section className="container1">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="container111 border-t-[1px] border-b-[1px] py-[75px] border-[#E7E7E7] border-solid">
          <div  className="container11">
            <BasicBreadcrumbs text={t("Магазин")}/>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex justify-between flex-wrap gap-y-[63px] xl:justify-center xl:gap-[50px]">
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[350px] h-[515px] flex flex-col justify-between">
            <div className="p-[24px_50px] bg-[#F4F7FE80]">
              <img src={deko} alt="" />
            </div>

            <div className="flex flex-col items-center gap-[13px]">
              <HalfRating />
              <h1 className="font-[700] text-[18px] text-center text-[#304560] leading-[22px]">
                {t("DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос")}
              </h1>
              <h1 className="font-[700] text-[20px] text-[#2389FF] leading-[26px]">
                4000 ₽
              </h1>
            </div>

            <div className="flex items-center justify-between">
              <button className="p-[16px_32px] flex items-center rounded-[5px] justify-center bg-[#2389FF] text-white font-[400] text-[20px] leading-[24px]">{t("В корзину")}</button>
              <button className="p-[16px_18px] flex items-center rounded-[5px] justify-center bg-[#F4F7FE] font-[400] leading-[24px] text-[20px] text-[#304560]">{t("Быстрый заказ")}</button>
            </div>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[350px] h-[515px] flex flex-col gap-[22px]">
            <div className="p-[24px_50px] bg-[#F4F7FE80]">
              <img src={deko} alt="" />
            </div>

            <div className="flex flex-col items-center gap-[13px]">
              <HalfRating />
              <h1 className="font-[700] text-[18px] text-center text-[#304560] leading-[22px]">
                {t("DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос")}
              </h1>
              <h1 className="font-[700] text-[20px] text-[#2389FF] leading-[26px]">
                4000 ₽
              </h1>
            </div>
          </div>

          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[350px] h-[515px] flex flex-col gap-[22px]">
            <div className="p-[24px_50px] bg-[#F4F7FE80]">
              <img src={deko} alt="" />
            </div>

            <div className="flex flex-col items-center gap-[13px]">
              <HalfRating />
              <h1 className="font-[700] text-[18px] text-center text-[#304560] leading-[22px]">
                {t("DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос")}
              </h1>
              <h1 className="font-[700] text-[20px] text-[#2389FF] leading-[26px]">
                4000 ₽
              </h1>
            </div>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[350px] h-[515px] flex flex-col gap-[22px]">
            <div className="p-[24px_50px] bg-[#F4F7FE80]">
              <img src={deko} alt="" />
            </div>

            <div className="flex flex-col items-center gap-[13px]">
              <HalfRating />
              <h1 className="font-[700] text-[18px] text-center text-[#304560] leading-[22px]">
                {t("DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос")}
              </h1>
              <h1 className="font-[700] text-[20px] text-[#2389FF] leading-[26px]">
                4000 ₽
              </h1>
            </div>
          </div>

          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[350px] h-[515px] flex flex-col gap-[22px]">
            <div className="p-[24px_50px] bg-[#F4F7FE80]">
              <img src={deko} alt="" />
            </div>

            <div className="flex flex-col items-center gap-[13px]">
              <HalfRating />
              <h1 className="font-[700] text-[18px] text-center text-[#304560] leading-[22px]">
                {t("DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос")}
              </h1>
              <h1 className="font-[700] text-[20px] text-[#2389FF] leading-[26px]">
                4000 ₽
              </h1>
            </div>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[350px] h-[515px] flex flex-col gap-[22px]">
            <div className="p-[24px_50px] bg-[#F4F7FE80]">
              <img src={deko} alt="" />
            </div>

            <div className="flex flex-col items-center gap-[13px]">
              <HalfRating />
              <h1 className="font-[700] text-[18px] text-center text-[#304560] leading-[22px]">
                {t("DEKOHAIR (Dekopill 60мл.) — Лосьон против выпадения волос")}
              </h1>
              <h1 className="font-[700] text-[20px] text-[#2389FF] leading-[26px]">
                4000 ₽
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
