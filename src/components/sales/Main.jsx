import React from "react";
import SaleItems from "./SaleItems";

const Main = (props) => {
  const { products, onAdd } = props;
  return (
    <div class="grid grid-cols-4 grid-rows-1 gap-4 m-3">
      {products.map((product) => (
        <SaleItems key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Main;
