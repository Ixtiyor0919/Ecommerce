function CatageryCard(props) {
  return (
    <button className="bg-white   h-[104px] flex flex-col justify-center items-center p-8 rounded-[12px] hover:bg-slate-400 hover:duration-200 hover:text-slate-100 ">
      <img src={props.image} alt="Catagpry-iconca" />
      <p className="text-base font-normal pt-[14px]">{props.title}</p>
    </button>
  );
}

export default CatageryCard;
