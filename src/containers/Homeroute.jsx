import ProductCard from "../components/home/CategoryCard";
import Catagerory from "../components/home/Catagery";
import Dastavkamaskve from "../components/home/Dastavkapizza";
import Desesrti from "../components/home/Deserti";
import Drinks from "../components/home/Drinks";
import Gazakzakiski from "../components/home/Gazakzaksiski";
import Kombo from "../components/home/Kombo";
import Pizza from "../components/home/Pizza";
import Searchinput from "../components/home/Searchinput";
import Sousi from "../components/home/Sousi";
import Sushi from "../components/home/Sushi";
import Layoutroute from "../Layout/Index";
// import HeaderAccordion from "../components/home/HeaderAccordion";

function Homeroute({ darkMode, setDarkMode }) {
  return (
    <div className=" bg-myGray dark:bg-mySlate ">
      <div className="">
        <Layoutroute darkMode={darkMode} setDarkMode={setDarkMode}>
          <div className="grid grid-cols-1">
            {/* <HeaderAccordion /> */}
            <Catagerory />
            <Searchinput />
            <Pizza />
            <Sushi />
            <Gazakzakiski />
            <Desesrti />
            <Drinks />
            <Sousi />
            <Kombo />
            <Dastavkamaskve />
          </div>
          {/* <ProductCard /> */}
          {/* //Tayyor catageroy uchun card bor */}
        </Layoutroute>
      </div>
    </div>
  );
}

export default Homeroute;
