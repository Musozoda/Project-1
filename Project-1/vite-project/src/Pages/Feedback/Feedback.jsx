import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../Images/logo.png";
import vector3 from "../../Images/vector (3).png";
import img01 from "../../Images/img01.png";
import img02 from "../../Images/img02.png";
import img03 from "../../Images/img03.png";
import noroot4 from "../../Images/noroot 4.png";
import noroot5 from "../../Images/noroot 5.png";

import unnamed from "../../Images/unnamed.png";

import left from "../../Images/left.png";

import right from "../../Images/right.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Drawer1 from "../../components/Drawer/Drawer";
import cart from "../../Images/cart.png";
import Switcher from "../../components/Switcher/Switcher";
import BasicBreadcrumbs from "../../components/Bread/Bread";
import HalfRating from "../../components/Rating/Rating";

const Feedback = () => {
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
                <li className="font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  <Link to="/">{t("Главная")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  <Link to="/Shop">{t("Магазин")}</Link>
                </li>
                <li className="font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  <Link to="/Help">{t("Вопросы и ответы")}</Link>
                </li>
                <li className="font-[700] text-[16px] text-[#2389FF] leading-[21px]">
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
              <div className="flex items-center gap-[8px]">
                <button className=" dark:text-white" onClick={() => changeLanguage("en")}>En</button>
                <button className=" dark:text-white" onClick={() => changeLanguage("ru")}>Ru</button>
              </div>
              <div className="flex  items-center gap-[20px]">
                <img src={cart} alt="" />
                <button className="p-[15px_34px] border-[1px] border-solid border-[#2389FF] rounded-[8px] font-[400] text-[16px] text-[#304560] dark:text-white leading-[21px]">
                  Перезвоните мне
                </button>
              </div>
              <Switcher />
            </div>
          </nav>
        </div>
      </header>

      <section className="container1">
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="container111 border-t-[1px] border-b-[1px] py-[75px] border-[#E7E7E7] border-solid">
          <div className="container11">
            <BasicBreadcrumbs text={t("Становимся лучше благодаря вам")} />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 py-[75px]">
          <div className="flex justify-between items-start xl:flex-wrap xl:gap-[50px] xl:justify-center">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[19px] flex-col w-[353px] h-[230px] ">
              <div className="flex flex-col gap-[15px]">
                <div>
                  <img src={img01} alt="" />
                  <p className="font-[700] text-[20px] text-[#304560] leading-[24px]">
                    {t(
                      "Пользуетесь нашей продукцией или ищете отзывы по товарам?"
                    )}
                  </p>
                </div>
                <p className="font-[400] text-[16px] text-[#728399] dark:text-white leading-[21px]">
                  {t("У каждого товара есть свой отзывы.")}
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <p className="font-[700] text-[18px] text-[#2389FF] leading-[22px]">
                  {t("Перейти в каталог")}
                </p>
                <img src={vector3} alt="" />
              </div>
            </div>

            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[19px] flex-col w-[353px] h-[230px] ">
              <div className="flex flex-col gap-[15px]">
                <div>
                  <img src={img02} alt="" />
                  <p className="font-[700] text-[20px] text-[#304560] leading-[24px]">
                    {t(
                      "Есть вопросы или нужна информация об оплате/доставке?"
                    )}
                  </p>
                </div>
                <p className="font-[400] text-[16px] text-[#728399] dark:text-white leading-[21px]">
                  {t("Вы можете задать вопрос или найти ответы на типовые вопросы в разделе")}
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <p className="font-[700] text-[18px] text-[#2389FF] leading-[22px]">
                  {t("Вопросы и ответы")}
                </p>
                <img src={vector3} alt="" />
              </div>
            </div>

            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[19px] flex-col w-[353px] h-[230px] ">
              <div className="flex flex-col gap-[15px]">
                <div>
                  <img src={img03} alt="" />
                  <p className="font-[700] text-[20px] text-[#304560] leading-[24px]">
                    {t(
                      "Ищете отзывы о компании или хотите оставить свой?"
                    )}
                  </p>
                </div>
                <p className="font-[400] text-[16px] text-[#728399] dark:text-white leading-[21px]">
                  {t("Изучите подборку сохраненных и добро пожаловать в общий чат ниже!")}
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <p className="font-[700] text-[18px] text-[#2389FF] leading-[22px]">
                  {t("Перейти к отзывам")}
                </p>
                <img src={vector3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1 bglinear4 dark:bg-black">
        <div className="container111 relative  overflow-hidden">
          <div className="container11  flex flex-col gap-[55px] py-[89px]">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start justify-between ">
              <div className="max-w-[812px] flex flex-col gap-[19px]">
                <h1 className="font-[700] text-[42px] text-[#304560] leading-[50px]">
                  {t("Честные отзывы")}
                </h1>
                <p className="font-[400] text-[18px] text-[#728399] leading-[23px]">
                  {t("клиентов, партнёров и профессионалов")}
                </p>
              </div>
              <div className="flex items-center gap-[17px]">
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
            </div>

            <div className="flex items-start justify-between xl:flex-wrap xl:justify-center xl:gap-[75px]">


              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col bg-white  rounded-[10px] gap-[25px] w-[341px] h-[275px] shadow-[0_0_15px_0] shadow-[#77777726] p-[22px_18px]">
                <div className=" flex items-center gap-[20px]">
                  <img src={unnamed} alt="" />
                  <div className="flex flex-col gap-[8px]">
                    <p className="font-[400] text-[18px] text-[#728399] leading-[23px]">
                      Пашкова Алла
                    </p>
                    <h1 className="font-[700] text-[20px] text-[#304560] leading-[26px]">
                      {t("Врач-трихолог")}
                    </h1>
                    <HalfRating />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] max-w-[281px]">
                  <h1 className="font-[700] text-[18px] text-[#304560] leading-[22px]">
                    {t("Прекрасно себя показал")}
                  </h1>
                  <p className="font-[400] text-[18px] text-[#728399] leading-[23px]">
                    {t("«Использую Декопил в своей практике несколько лет»")}
                  </p>
                  <h1 className="font-[700] text-[18px] text-[#2389FF] leading-[23.4px]">
                    {t("Посмотреть отзыв")}
                  </h1>
                </div>
              </div>

              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col bg-white  rounded-[10px] gap-[25px] w-[341px] h-[275px] shadow-[0_0_15px_0] shadow-[#77777726] p-[22px_18px]">
                <div className=" flex items-center gap-[20px]">
                  <img src={unnamed} alt="" />
                  <div className="flex flex-col gap-[8px]">
                    <p className="font-[400] text-[18px] text-[#728399] leading-[23px]">
                      Пашкова Алла
                    </p>
                    <h1 className="font-[700] text-[20px] text-[#304560] leading-[26px]">
                      {t("Врач-трихолог")}
                    </h1>
                    <HalfRating />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] max-w-[281px]">
                  <h1 className="font-[700] text-[18px] text-[#304560] leading-[22px]">
                    {t("Прекрасно себя показал")}
                  </h1>
                  <p className="font-[400] text-[18px] text-[#728399] leading-[23px]">
                    {t("«Использую Декопил в своей практике несколько лет»")}
                  </p>
                  <h1 className="font-[700] text-[18px] text-[#2389FF] leading-[23.4px]">
                    {t("Посмотреть отзыв")}
                  </h1>
                </div>
              </div>

              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col bg-white  rounded-[10px] gap-[25px] w-[341px] h-[275px] shadow-[0_0_15px_0] shadow-[#77777726] p-[22px_18px]">
                <div className=" flex items-center gap-[20px]">
                  <img src={unnamed} alt="" />
                  <div className="flex flex-col gap-[8px]">
                    <p className="font-[400] text-[18px] text-[#728399] leading-[23px]">
                      Пашкова Алла
                    </p>
                    <h1 className="font-[700] text-[20px] text-[#304560] leading-[26px]">
                      {t("Врач-трихолог")}
                    </h1>
                    <HalfRating />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] max-w-[281px]">
                  <h1 className="font-[700] text-[18px] text-[#304560] leading-[22px]">
                    {t("Прекрасно себя показал")}
                  </h1>
                  <p className="font-[400] text-[18px] text-[#728399] leading-[23px]">
                    {t("«Использую Декопил в своей практике несколько лет»")}
                  </p>
                  <h1 className="font-[700] text-[18px] text-[#2389FF] leading-[23.4px]">
                    {t("Посмотреть отзыв")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <img
            src={noroot4}
            className=" absolute left-[-20px] top-[-130px]"
            alt=""
          />
          <img
            src={noroot5}
            className=" absolute right-[0] bottom-[-180px] z-[-1]"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Feedback;
