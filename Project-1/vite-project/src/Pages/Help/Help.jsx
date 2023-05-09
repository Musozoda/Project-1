import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../Images/logo.png";
import Drawer1 from "../../components/Drawer/Drawer";
import cart from "../../Images/cart.png";
import Switcher from "../../components/Switcher/Switcher";
import BasicBreadcrumbs from "../../components/Bread/Bread";
import SimpleAccordion from "../../components/Accordion/Accordion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Help = () => {
  const [t, i18n] = useTranslation("");
  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <header className="container1 dark:bg-black">
        <div className="container11">
          <nav data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center justify-between py-[18px] relative z-20">
            <div className="flex items-center gap-[30px]">
              <img src={logo} alt="" />
              <ul className="flex xl:hidden items-center w-[545px] justify-between">
                <li className="font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  <Link to="/">{t("Главная")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  <Link to="/Shop">{t("Магазин")}</Link>
                </li>
                <li className="font-[700] text-[16px] text-[#2389FF] leading-[21px]">
                  <Link to="/Help">{t("Вопросы и ответы")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  <Link to="/Feedback">{t("Отзывы")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  <Link to="/Contacts">{t("Контакты")}</Link>
                </li>
              </ul>
            </div>

            <div className="hidden xl:block">
              <Drawer1 />
            </div>

            <div className="flex items-center gap-[14px] xl:hidden">
                <div className="flex items-center dark:text-white gap-[8px]">
                  <button onClick={()=>changeLanguage("en")}>En</button>
                  <button onClick={()=>changeLanguage("ru")}>Ru</button>
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

      <section className="container1 dark:bg-[#d3d3d34d]">
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="container111 border-t-[1px] py-[75px] border-[#E7E7E7] border-solid">
              <div className="container11">
                <BasicBreadcrumbs text={t("Вопросы и ответы")} />
              </div>
            </div>
          </section>

          <section className="container1 dark:bg-black">
            <div className="container11 py-[50px]">
                <SimpleAccordion/>
            </div>
          </section>
    </div>
  );
};

export default Help;
