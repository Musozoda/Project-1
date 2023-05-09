import React, { useEffect } from "react";
import logo from "../../Images/logo.png";
import unnamed from "../../Images/unnamed.png";
import imgg1 from "../../Images/imgg1.png";
import imgg2 from "../../Images/imgg2.png";
import imgg3 from "../../Images/imgg3.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

import left from "../../Images/left.png";
import right from "../../Images/right.png";
import photo from "../../Images/photo.png";
import photo1 from "../../Images/photo (1).png";
import photo2 from "../../Images/photo (2).png";
import cart from "../../Images/cart.png";
import vector from "../../Images/vector.png";
import vector1 from "../../Images/vector (1).png";
import vector2 from "../../Images/vector (2).png";
import ukladka from "../../Images/ukladka.png";
import ukladka2 from "../../Images/ukladka2.png";
import ukladka3 from "../../Images/group 1.png";
import rectangle20 from "../../Images/rectangle 20.png";
import noroot1 from "../../Images/noroot 1.png";
import noroot2 from "../../Images/noroot 2.png";
import noroot21 from "../../Images/noroot 2 (1).png";
import noroot3 from "../../Images/noroot 3.png";
import noroot4 from "../../Images/noroot 4.png";
import noroot5 from "../../Images/noroot 5.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card1 from "../../components/Card1/Card1";
import HalfRating from "../../components/Rating/Rating";
import Swiper1 from "../../components/Swiper/Swiper";
import Drawer1 from "../../components/Drawer/Drawer";
import Switcher from "../../components/Switcher/Switcher";

const Home = () => {
  const [t, i18n] = useTranslation("");
  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="dark:bg-[gray] ">
      <header className="container1">
        <div className="container111 bglinear relative xl:flex xl:flex-col overflow-y-hidden">
          <div className="container11">
            <nav data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="flex items-center justify-between py-[18px] relative z-20">
              <div className="flex items-center gap-[30px]">
                <img src={logo} alt="" />
                <ul className="flex xl:hidden items-center w-[545px] justify-between">
                  <li className="font-[700] text-[16px] text-[#2389FF] leading-[21px]">
                    <Link to="/">{t("Главная")}</Link>
                  </li>
                  <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
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

            <div className="flex items-center justify-between p-[98px_0_154px_0] xl:justify-center">
              <div className="max-w-[502px] flex flex-col gap-[35px] items-start xl:items-center">
                <h1 data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[700] xl:text-center text-[42px] text-[#304560] max-w-[466px] leading-[50px]">
                  {t("Инновации на службе ваших волос")}
                </h1>
                <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[400] xl:text-center text-[20px] text-[#728399] leading-[26px]">
                  {t(
                    "Эффективные решения против выпадения и для роста волос, рекомендуемые профессионалами"
                  )}
                </p>
                <img
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                  className=" absolute bottom-0 xl:static right-[12%] z-[10] xl:hidden"
                  src={ukladka}
                  alt=""
                />
                <img
                  className=" absolute bottom-0 xl:static right-[12%] z-[10] hidden xl:flex"
                  src={ukladka3}
                  alt=""
                />

                <button data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[15px_67px] flex items-center gap-[16px] bg-[#2389FF] rounded-[5px] text-white">
                  {t("В магазин")}
                  <img src={vector} alt="" />
                </button>
              </div>
            </div>
          </div>
          <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
            src={noroot2}
            className=" absolute bottom-[-170px] left-0 z-[-1]"
            alt=""
          />
          <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
            src={noroot3}
            className=" absolute right-0 bottom-[-200px] xl:z-[-1]"
            alt=""
          />
        </div>
      </header>

      <section className="container1 dark:bg-black">
        <div className="container11 flex flex-col gap-[52px] py-[75px]">
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[812px] flex flex-col gap-[19px]">
            <h1 className="font-[700] text-[42px] text-[#304560] dark:text-white leading-[50px]">
              {t("Принципы Charismo")}
            </h1>
            <p className="font-[400] text-[18px] text-[#728399] dark:text-white leading-[23px]">
              {t(
                "7 лет мы создаем работающие решения для терапии структуры и корней волос. Благодаря принципам работы нас рекомендуют врачи и профессионалы индустрии красоты."
              )}
            </p>
          </div>

          <div className="flex items-center justify-between xl:flex-wrap xl:justify-center xl:gap-[75px]">
            <Card1
              className="shadow-[0_5px_15px_0] shadow-[#0000001A]"
              img={vector1}
              h1="Натуральность"
              p="Мы не используем гормоны — забудьте о синдроме отмены и проблемах со здоровьем из-за побочных эффектов"
            />
            <Card1
              img={vector1}
              h1="Эффективность"
              p="Проверена клиническими исследованиями в США, Европе и России, и тысячами довольных клиентов"
            />
            <Card1
              img={vector1}
              h1="Безопасность"
              p="Производится в США на сертифицированном FDA производстве из ингредиентов, прошедших GMP аттестацию"
            />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex flex-col gap-[45px] py-[75px]">
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[812px] flex flex-col gap-[19px]">
            <h1 className="font-[700] text-[42px] text-[#304560] leading-[50px]">
              {t("Эффективные решения")}
            </h1>
            <p className="font-[400] text-[18px] text-[#728399] dark:text-white leading-[23px]">
              {t("восстановления, питания и активации роста")}
            </p>
          </div>

          <div className=" justify-between items-start flex xl:flex-wrap xl:justify-center xl:gap-[75px]">
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[309px] h-[369px]  flex flex-col items-center gap-[] bglinear2">
              <img src={photo} alt="" />
              <div className="relative pb-[32px] top-[-50px] flex flex-col items-center gap-[12px]">
                <h1 className="font-[700] text-[20px] text-[#304560] leading-[24px]">
                  {t("Для волос головы")}
                </h1>
                <p className="font-[400] max-w-[271px] text-center tetx-[16px] text-[#728399] leading-[21px]">
                  {t(
                    "Восстановление, питание и активация роста волос на голове"
                  )}
                </p>
                <div className="font-[700] tetx-[18px] text-[#2389FF] leading-[23px] flex items-center gap-[7px]">
                  {t("Посмотреть товары")}
                  <img src={vector2} className="h-[17px]" alt="" />
                </div>
              </div>
            </div>

            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[309px] h-[369px]  flex flex-col items-center gap-[] bglinear2">
              <img src={photo1} alt="" />
              <div className="relative pb-[32px] top-[-50px] flex flex-col items-center gap-[12px]">
                <h1 className="font-[700] text-[20px] text-[#304560] leading-[24px]">
                  {t("Для волос головы")}
                </h1>
                <p className="font-[400] max-w-[271px] text-center tetx-[16px] text-[#728399] leading-[21px]">
                  {t(
                    "Восстановление, питание и активация роста волос на голове"
                  )}
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[309px] h-[369px]  flex flex-col items-center gap-[] bglinear2">
              <img src={photo2} alt="" />
              <div className="relative pb-[32px] top-[-50px] flex flex-col items-center gap-[12px]">
                <h1 className="font-[700] text-[20px] text-[#304560] leading-[24px]">
                  {t("Для волос головы")}
                </h1>
                <p className="font-[400] max-w-[271px] text-center tetx-[16px] text-[#728399] leading-[21px]">
                  {t(
                    "Восстановление, питание и активация роста волос на голове"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1 bglinear4 dark:bg-black">
        <div className="container111 relative  overflow-hidden">
          <div className="container11  flex flex-col gap-[55px] py-[89px]">
            <div className="flex items-start justify-between ">
              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[812px] flex flex-col gap-[19px]">
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

            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start justify-between xl:flex-wrap xl:justify-center xl:gap-[75px]">
              <div className="flex flex-col bg-white  rounded-[10px] gap-[25px] w-[341px] h-[275px] shadow-[0_0_15px_0] shadow-[#77777726] p-[22px_18px]">
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

              <div className="flex flex-col bg-white  rounded-[10px] gap-[25px] w-[341px] h-[275px] shadow-[0_0_15px_0] shadow-[#77777726] p-[22px_18px]">
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

              <div className="flex flex-col bg-white  rounded-[10px] gap-[25px] w-[341px] h-[275px] shadow-[0_0_15px_0] shadow-[#77777726] p-[22px_18px]">
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

      <section className="container1 ">
        <div className="container11 flex flex-col gap-[71px] py-[75px]">
          <div className="max-w-[812px] flex flex-col gap-[19px]">
            <h1 data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[700] text-[42px] text-[#304560] leading-[50px]">
              {t("Наши партнёры")}
            </h1>
            <p className="font-[400] text-[18px] text-[#728399] dark:text-white leading-[23px]">
              {t("признанные лидеры в своих областях")}
            </p>
          </div>
          <div>
            <Swiper1
              img1={imgg1}
              img2={imgg2}
              img3={imgg3}
              img4={imgg1}
              img5={imgg2}
              img6={imgg3}
              img7={imgg1}
              img8={imgg2}
            />
          </div>
        </div>
      </section>

      <section className="container1 bglinear5">
        <div className="container111 relative overflow-hidden">
          <div className="container11 pt-[43px] pb-[30px] text-white flex flex-col items-center gap-[40px]">
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[9px] justify-center items-center">
              <h1 className="font-[700] text-[42px] text-[] leading-[50px]">
                {t("Вы профессионал индустрии красоты?")}
              </h1>
              <p className="font-[400] text-[20px] text-[] leading-[26px]">
                {t(
                  "Узнайте, как увеличить свой доход при помощи партнёрства с надёжной компанией"
                )}
              </p>
            </div>

            <button data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[270px] h-[55px] flex items-center justify-center text-[#2389FF] rounded-[5px] bg-white">
              Узнать подробнее
            </button>
          </div>
          <img src={noroot1} className=" absolute left-0 top-0" alt="" />
          <img src={noroot21} className=" absolute right-0 top-0" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
