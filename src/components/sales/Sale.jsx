import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { AiOutlineSearch } from "react-icons//ai";

import {
  AiFillCaretDown,
  AiFillEye,
  AiFillDelete,
  AiFillPlusCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Cart from "./Cart";
import data from "../../data";
import Main from "./Main";

const Sale = (props) => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty == 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div class="grid grid-cols-5 gap-4 ml-4 mr-4 w-auto h-[650px]">
            <div className="col-span-2 bg-[#ffffff] mr-6">
              <div class="grid grid-cols-4 grid-rows-5 gap-4">
                <div className="col-span-4 row-span-1 mt-2">
                  <div className="flex justify-between pt-1 pb-1 border">
                    <span className="ml-3 text-sm text-slate-400">
                      Generall
                    </span>
                    <div className="flex text-blue-400">
                      <BsFillPencilFill className="border mr-1" size={24} />
                      <AiFillEye className="border mr-1" size={24} />
                      <AiFillPlusCircle className="border mr-1" size={24} />
                    </div>
                  </div>
                  <div className="flex justify-between border pt-1 pb-1">
                    <span className="ml-3 text-sm text-slate-400">
                      Warehouse
                    </span>
                    <div className="flex text-slate-400">
                      <AiFillCaretDown className="border mr-1" size={24} />
                    </div>
                  </div>
                  <div className="flex justify-between border pt-1 pb-1">
                    <span className="ml-3 text-sm text-slate-400">
                      Scan/Search products by name/code
                    </span>
                    <div className="flex  text-slate-400">
                      <AiFillPlusCircle className="border mr-1" size={24} />
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-3">
                  <div class="grid grid-cols-4 gap-4 -mt-8">
                    <div className="col-span-4 flex justify-between bg-gray-500 p-2 items-center text-slate-300">
                      <span className="ml-6">Product</span>
                      <span>Qty</span>
                      <span>Price</span>
                      <span className="text-slate-300 mr-8">
                        <AiFillDelete size={22} />
                      </span>
                    </div>
                    <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-[#EAEAEA] -ml-6 overflow-auto scrollbar">
              <div className="bg-gray-500 h-16 flex justify-between items-center">
                <div className="text-slate-400 ml-6 flex flex-row items-center border-gray-400 border p-[2px] cursor-pointer">
                  <span className="mr-2">Search</span>
                  <AiOutlineSearch size={18} />
                </div>
                <div>
                  <select class="bg-gray-200 outline-none border-gray-300 text-slate-400 text-sm border block w-24 mr-6 h-7">
                    <option selected>Category</option>
                    <option value="US">All</option>
                    <option value="CA">Stell</option>
                    <option value="FR">Concrete</option>
                    <option value="DE">Brick</option>
                  </select>
                </div>
              </div>
              <Main products={products} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold uppercase">
                    Finalize Sale
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black -mt-3 float-right text-6xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-red-300 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 pt-2 bg-[#EAEAEA] flex-auto">
                  <h2>Biller</h2>
                  <select
                    id="countries"
                    class="bg-gray-50 mt-2 outline-none border-gray-300 text-gray-900 text-sm border block w-full"
                  >
                    <option selected>Sao Chea</option>
                    <option value="US">Mony</option>
                    <option value="CA">Nak</option>
                    <option value="FR">Try</option>
                    <option value="DE">Ton</option>
                  </select>
                  <div className="flex flex-row mt-4 justify-between">
                    <textarea
                      name="text"
                      id=""
                      placeholder="sale note"
                      rows="5"
                      className="border outline-none p-2 w-[300px]"
                    ></textarea>
                    <textarea
                      name="text"
                      id=""
                      placeholder="sale note"
                      rows="5"
                      className="border outline-none p-2 w-[300px]"
                    ></textarea>
                  </div>
                  <div className="flex flex-row mt-6">
                    <div className="flex flex-col w-[300px] mr-8">
                      <label htmlFor="" className="text-md">
                        Amount
                      </label>
                      <input
                        type="text"
                        className="border mt-2 p-[1px] outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="">paying by</label>
                      <select
                        name=""
                        id=""
                        className="w-[300px] mt-2 border outline-none text-sm text-slate-400"
                      >
                        <option value="">Cash</option>
                        <option value="">Cash</option>
                        <option value="">Cash</option>
                        <option value="">Cash</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span>Payment note</span>
                    <textarea
                      name=""
                      id=""
                      rows="1"
                      className="w-full outline-none border p-2 mt-2"
                      placeholder="text"
                    ></textarea>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center flex-col p-6 pt-0 border-t border-solid border-slate-200">
                  <div className="flex flex-row items-center w-full bg-blue-400 justify-center p-1 mt-2 cursor-pointer">
                    <AiOutlinePlus size={18} className="mr-1" />
                    <span className="mt-[2px]">Add more payments</span>
                  </div>
                  <div
                    className="flex bg-emerald-500 mt-2 w-full justify-center cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <button
                      className="text-white font-bold uppercase text-sm p-2 mt-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Sale;
