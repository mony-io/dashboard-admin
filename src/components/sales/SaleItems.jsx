import React from "react";
import react from "../../assets/steel.jpg";

const SaleItems = (props) => {
  const { product, onAdd } = props;
  return (
    <div
      className="row-span-1 border border-slate-500 cursor-pointer hover:shadow-md overflow-hidden"
      onClick={() => onAdd(product)}
    >
      <img
        src={product.image}
        alt="img"
        className="bg-slate-300 rounded-sm object-cover h-[180px] w-[200px] hover:scale-105 duration-300"
      />
      <div className="bg-slate-300 p-1 mt-[2px] rounded-sm flex justify-center overflow-hidden z-20">
        <span className="font-semibold text-[#000000]">{product.name}</span>
        <span className="font-semibold text-[#000000]">${product.price}</span>
      </div>
    </div>
  );
};

export default SaleItems;
