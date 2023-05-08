import Footerh2 from "../components/Footerh2";
import Footerplar from "../components/Footerplar";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-white dark:bg-slate-800 dark:text-white">
      <div className="grid grid-cols-1 pt-[60px] pb-[32px] md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-[100px] max-w-[1250px] mx-auto px-8 lg:px-0">
        <div className="col-span-2 ">
          <div className="flex items-center space-x-3">
            <img src="/Pizzaicons.png" alt="footericonca" />
            <p>Куда пицца</p>
          </div>
          <p className="text-sm font-normal mt-12 lg:mt-[146px] ">
            © Copyright 2021 — Куда Пицца
          </p>
        </div>
        <div className="flex flex-col space-y-[20px]">
          <Footerplar title={"Куда пицца"} />
          <Footerh2 title={"O компании"} />
          <Footerh2 title={"Пользовательское соглашение"} />
          <Footerh2 title={"Условия гарантии"} />
        </div>
        <div className="flex flex-col space-y-[20px]">
          <Footerplar title={"Помощь"} />
          <Footerh2 title={"Ресторан"} />
          <Footerh2 title={"Контакты"} />
          <Footerh2 title={"Поддержка"} />
          <Footerh2 title={"Отследить заказ"} />
        </div>
        <div className="col-span-2 flex flex-col space-y-[20px] md:pl-48 lg:pl-0 ">
          <Footerplar title={"Контакты"} />
          <div className="flex items-center space-x-3">
            <BsTelephone className="text-myYellow" />
            <Link to="tel:+7 (926) 223-10-11">+7 (926) 223-10-11</Link>
          </div>
          <div className="flex items-center space-x-3">
            <CiLocationOn className="text-myYellow text-2xl" />
            <p>Москва, ул. Юных Ленинцев, д.99</p>
          </div>
          <div className=" flex items-center space-x-3 ">
            <BsFacebook className="text-myYellow" />
            {/* <p>Facebok</p> */}
            <Link to="#" class="facebok">
              Facebbok
            </Link>
            <AiFillInstagram className="text-myYellow" />
            <Link to="https://www.instagram.com/" class="instagram">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
