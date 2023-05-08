import NavLink from "../components/home/NavLink";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function Header({ setDarkMode, darkMode }) {
  const changeThemMode = () => {};
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white px-5  lg:px-auto fixed w-full z-10 ">
      <div className=" max-w-[1240px] mx-auto flex justify-between items-center py-10">
        <div className="flex items-center space-x-16">
          <div className="flex space-x-2 items-center">
            <img src="/Pizzaicons.png" alt="Pizzaicons" />
            <p>Куда пицца</p>
          </div>

          <div className="hidden lg:flex space-x-8 ">
            <NavLink title={"Акции"} />
            <NavLink title={"Пицца"} />
            <NavLink title={"Суши"} />
            <NavLink title={"Напитки"} />
            <NavLink title={"Закуски"} />
            <NavLink title={"Комбо"} />
            <NavLink title={"Комбо"} />
            <NavLink title={"Соусы"} />
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="">
            {/* {darkMode ? (
              <BsSunFill
                className="text-2xl text-white"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <BsMoon className="text-2xl" onClick={() => setDarkMode(true)} />
            )} */}
            {/* <BsFillMoonFill
              className="text-2xl"
              onClick={() => setDarkMode(true)}
            />
            <BsSunFill className="text-2xl" /> */}
          </div>
          <div className="w-24 h-9 flex justify-center items-center space-x-3 rounded bg-myYellow">
            <img src="/basket.png" alt="basket" />
            <p className="text-white">0 ₽</p>
          </div>
          <div className="text-2xl lg:hidden dark:text-white">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
