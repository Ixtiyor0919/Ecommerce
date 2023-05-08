import CatageryCard from "./CategeryCard";

function Catagerory() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[30px] mt-32">
        <CatageryCard title={"Акции"} image={"/ctgicon.png"} />
        <CatageryCard title={"Пицца"} image={"/ctgicon1.png"} />
        <CatageryCard title={"Суши"} image={"/ctgicon2.png"} />
        <CatageryCard title={"Напитки"} image={"/ctgicon3.png"} />
        <CatageryCard title={"Закуски"} image={"/ctgicon4.png"} />
        <CatageryCard title={"Закуски"} image={"/ctgicon5.png"} />
        <CatageryCard title={"Десерты"} image={"/ctgicon6.png"} />
        <CatageryCard title={"Соусы"} image={"/ctgicon7.png"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]  pt-[30px] ">
        <img src="/heroicons.png" alt="hero-img" />
        <img src="/heroicons1.png" alt="hero-img" />
        <img src="/heroicons.png" alt="hero-img" />
        <img src="/heroicons1.png" alt="hero-img" />
      </div>
    </div>
  );
}

export default Catagerory;
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]
