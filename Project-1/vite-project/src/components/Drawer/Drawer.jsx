import { Button, Drawer, Radio, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import cart from '../../Images/cart.png'
import Switcher from "../Switcher/Switcher";
const Drawer1 = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
        <Button type="link" onClick={showDrawer}>
          <MenuIcon/>
        </Button>
      </Space>
      <Drawer
        title="Menu "
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="flex flex-col gap-[50px]">
        <ul className="flex flex-col items-start gap-[25px] w-[545px] justify-between">
          <Link className="w-[100%] h-[50px] pl-[20px] bg-[lightgray] rounded-[10px] hover:bg-[gray] hover:text-white flex items-center" to="/">
            <li className="font-[700]text-[16px] text-[#2389FF] leading-[21px]">
              Главная
            </li>{" "}
          </Link>
          <Link className="w-[100%] h-[50px] pl-[20px] bg-[lightgray] rounded-[10px] hover:bg-[gray] hover:text-white flex items-center" to="/Shop">
            <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
              Магазин
            </li>{" "}
          </Link>
          <Link className="w-[100%] h-[50px] pl-[20px] bg-[lightgray] rounded-[10px] hover:bg-[gray] hover:text-white flex items-center" to="/Help">
            <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
              Вопросы и ответы
            </li>
          </Link>
          <Link className="w-[100%] h-[50px] pl-[20px] bg-[lightgray] rounded-[10px] hover:bg-[gray] hover:text-white flex items-center" to="/Feedback">
            <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
              Отзывы
            </li>{" "}
          </Link>
          <Link className=" w-[100%] h-[50px] pl-[20px] bg-[lightgray] rounded-[10px] hover:bg-[gray] hover:text-white flex items-center" to="/Contacts">
            <li className="font-[400] text-[16px] text-[#304560] leading-[21px]">
              Контакты
            </li>{" "}
          </Link>
        </ul>
        <div className="flex items-start gap-[14px] flex-col">
                <div className="flex items-center gap-[8px]">
                  <button onClick={()=>changeLanguage("en")}>En</button>
                  <button onClick={()=>changeLanguage("ru")}>Ru</button>
                </div>
                <div className="flex items-center gap-[20px]">
                  <img src={cart} alt="" />
                  <button className="p-[15px_34px] border-[1px] border-solid border-[#2389FF] rounded-[8px] font-[400] text-[16px] text-[#304560] leading-[21px]">
                    Перезвоните мне
                  </button>
                </div>
                <Switcher />
              </div>
        </div>

      </Drawer>
    </>
  );
};
export default Drawer1;
