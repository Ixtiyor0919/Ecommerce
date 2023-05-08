import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./CategoryCard";
import Filterplar from "./Filterplar";
import Pizzatitle from "./Pizzatitle";

function Sushi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <div className="flex justify-between items-center pt-[30px]">
        <Pizzatitle title={"Суши"} />
        <Filterplar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-8">
        {data.length > 0 ? (
          data.map((item) => (
            <ProductCard key={item.id} {...item} setData={setData} />
          ))
        ) : (
          <h1 className="flex justify-center items-center text-3xl text-myBlack font-bold mt-48">
            Loading.....
          </h1>
        )}
      </div>
    </>
  );
}

export default Sushi;
