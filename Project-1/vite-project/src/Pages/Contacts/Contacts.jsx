import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../Images/logo.png";
import blog from "../../Images/blog.png";
import facebook from "../../Images/facebook (1).png";
import vk from "../../Images/vk (1).png";
import odnoklassniki from "../../Images/odnoklassniki (1).png";
import twiter from "../../Images/twiter (1).png";
import vector4 from "../../Images/vector (4).png";

import Drawer1 from "../../components/Drawer/Drawer";
import cart from "../../Images/cart.png";
import Switcher from "../../components/Switcher/Switcher";
import BasicBreadcrumbs from "../../components/Bread/Bread";
import HalfRating from "../../components/Rating/Rating";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
  const [t, i18n] = useTranslation("");
  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='dark:bg-[#444444] '>


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
                <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
                  <Link to="/Feedback">{t("Отзывы")}</Link>
                </li>
                <li className="font-[700] text-[16px] text-[#2389FF] dark:text-white leading-[21px]">
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
            <BasicBreadcrumbs text={t("How to Improve Your Attitude in a Matter of Minutes")} />
          </div>
        </div>
      </section>

      <section className='container1'>
        <div  className='container11 flex flex-col gap-[50px] py-[75px]'>
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='flex items-start flex-col gap-[28px]'>
            <img src={blog} className='order-1' alt="" />
            <h1 className='font-[700]  text-[42px] text-[#304560] leading-[50px]'>
              {t("How to Improve Your Attitude in a Matter of Minutes")}
            </h1>
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className=' flex items-center gap-[24px] order-3'>
              <div className='flex items-center gap-[8px]'>
                <img src={vector4} alt="" />
                <p className='font-[400] text-[14px] text-[#728399] dark:text-white leading-[18px]'>
                {t("April 11, 2018")}
                </p>
              </div>

              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='flex items-center gap-[8px]'>
                <img src={vector4} alt="" />
                <p className='font-[400] text-[14px] text-[#728399] dark:text-white leading-[18px]'>
                {t("April 11, 2018")}
                </p>
              </div>

              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='flex items-center gap-[8px]'>
                <img src={vector4} alt="" />
                <p className='font-[400] text-[14px] text-[#728399] dark:text-white leading-[18px]'>
                {t("April 11, 2018")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[37px]'>
                <div className='flex flex-col gap-[17px]'>
                  <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='font-[400] md585:hidden text-[#728399] dark:text-white text-[14px] leading-[22px]'>
                    {t("What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll go ahead and assume you went with option two. The opportunity to innovate is something most of us want more of in our daily work lives. Yet often, we feel we can’t be more creative at work because of factors beyond our control. Perhaps your company is risk-averse and likes to play it safe, perhaps your targets are intimidatingly aggressive.")}
                  </p>
                  <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='font-[400] text-[#728399] dark:text-white text-[14px] leading-[22px]'>
                    {t("Transparent Standards: My first and foremost guiding principle was that the services would need to continue to apply transparent and objective standards for all career fields to ensure leaders assign tasks, jobs, and career fields throughout the force based on ability, not gender. In this respect, the services have been able to leverage the great amounts of data they gathered over three years’ worth of studies to make their standards up to date and operationally relevant. We found over the last few years that in some cases we were doing things because that’s the way we’ve always done them.")}
                  </p>
                </div>
                <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='font-[400] md585:hidden text-[#728399] dark:text-white text-[14px] leading-[22px]'>
                  {t("What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll go ahead and assume you went with option two. The opportunity to innovate is something most of us want more of in our daily work lives. Yet often, we feel we can’t be more creative at work because of factors beyond our control. Perhaps your company is risk-averse and likes to play it safe, perhaps your targets are intimidatingly aggressive.")}
                </p>
              </div>
              <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className='font-[400] text-[#728399] dark:text-white text-[14px] leading-[22px] pl-[34px] border-l-[3px] border-[#2389FF] border-solid'>
                {t("Transparent Standards: My first and foremost guiding principle was that the services would need to continue to apply transparent and objective standards for all career fields to ensure leaders assign tasks, jobs, and career fields throughout the force based on ability, not gender. In this respect, the services have been able to leverage the great amounts of data they gathered over three years’ worth of studies to make their standards up to date and operationally relevant. We found over the last few years that in some cases we were doing things because that’s the way we’ve always done them.")}
              </p>
            </div>


          </div>
          <div className='flex items-center gap-[23px]'>
          <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={facebook} alt="" />
          <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={odnoklassniki} alt="" />
          <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={twiter} alt="" />
          <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={vk} alt="" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts