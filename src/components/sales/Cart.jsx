import React from "react";
import { ImCross } from "react-icons/im";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 200 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <>
      <div className="col-span-4 overflow-auto scrollbar h-[300px]">
        <div>{cartItems.length === 0 && <div className="text-center mt-4 text-slate-500 font-semibold">Cart is empty!</div>}</div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center m-2 text-slate-600">
            <div className="text-sm w-20 ml-6">{item.name}</div>
            <input value={item.qty} className="w-9 border outline-none border-gray-300 text-center text-sm"/>
            <span className="text-sm">${item.price * item.qty}</span>
            <div className="mr-1">
              <button  className="mr-2 text-xl bg-blue-300 p-2 pt-0 pb-0 rounded-md" onClick={() => onAdd(item)}>+</button>
              <button className="mr-2 text-xl bg-red-300 p-3 pt-0 pb-0 rounded-md" onClick={() => onRemove(item)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-4 row-span-2 h-24">
        <div class="grid grid-cols-4 gap-4">
          <div className="border col-span-4 text-sm flex justify-between pt-1 pb-1">
            <span className="font-semibold ml-4">Price</span>
            <span>${itemsPrice.toFixed(2)}</span>
            <span className="font-semibold">Tax</span>${taxPrice.toFixed(2)}
          </div>
          <div className="border col-span-4 text-sm flex justify-between pt-1 pb-1">
            <span className="font-semibold ml-4">Shipping</span>$
            {shippingPrice.toFixed(2)}
            <span className="font-semibold">Total</span>${totalPrice.toFixed(2)}
          </div>
          <div className="col-span-4">
            <div class="grid grid-cols-3 gap-x-1 h-auto">
              <div className="col-span-1 flex flex-col">
                <span className="bg-yellow-500 h-9 text-center pt-2">
                  Suspend
                </span>
                <span className="bg-red-400 h-9 text-center pt-2">Cancel</span>
              </div>
              <div className="col-span-1 flex flex-col">
                <span className="bg-blue-300 h-9 text-center pt-2">Order</span>
                <span className="bg-blue-500 h-9 text-center pt-2">Bill</span>
              </div>
              <div className="col-span-1 flex flex-col">
                <span
                  className="bg-green-600 h-[72px] text-center pt-6 cursor-pointer"
                  // onClick={() => setShowModal(true)}
                >
                  Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
