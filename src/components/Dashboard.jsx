import React from "react";
import { RiMailFill } from "react-icons/ri";
import { AiFillPlusSquare } from "react-icons/ai";

function Dashboard() {
  return (
    <div className="flex-1">
      <span className="flex uppercase underline text-xl text-slate-600 mb-4 tracking-wider h-16 items-center justify-center bg-secondary-bg-light shadow-sm m-2 rounded-sm">
        Welcome to our store
      </span>
      <div className="grid grid-cols-4 gap-4 m-2">
        <div className="bg-secondary-bg-light h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Stock</span>
          </div>
          <div className="h-18 bg-red-300 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="bg-secondary-bg-light h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Stock</span>
          </div>
          <div className="h-18 bg-red-300 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="bg-secondary-bg-light h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Stock</span>
          </div>
          <div className="h-18 bg-red-300 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="bg-secondary-bg-light h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Stock</span>
          </div>
          <div className="h-18 bg-red-300 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="col-span-full bg-secondary-bg-light shadow-sm">
          <div class="grid grid-rows-3 grid-flow-col gap-0 gap-x-0 border border-gray-300 rounded-sm overflow-hidden">
            <div className="bg-secondary-bg-light border-r-2 border-b-2">
              <div className="flex h-9 items-center ml-3">
                <span className="text-md text-slate-600">Name</span>
              </div>
            </div>
            <div className="bg-secondary-bg-light border-r-2 border-b-2">
              <div className="flex text-sm text-gray-500 h-12 items-center ml-3">Sao Chea</div>
            </div>
            <div className="bg-secondary-bg-light border-r-2">
              <div className="flex text-sm text-gray-500 h-12 items-center ml-3">Mony</div>
            </div>
            <div className="bg-secondary-bg-light border-r-2 border-b-2">
              <div className="flex h-9 items-center ml-3">
                <span className="text-md text-slate-600">Product</span>
              </div>
            </div>
            <div className="bg-secondary-bg-light border-r-2 border-b-2">
              <div className="flex text-sm text-gray-500 h-12 items-center ml-3">Angkor</div>
            </div>
            <div className="bg-secondary-bg-light border-r-2">
              <div className="flex text-sm text-gray-500 h-12 items-center ml-3">Hanuman</div>
            </div>
            <div className="bg-secondary-bg-light border-r-2 border-b-2">
              <div className="flex h-9 items-center ml-3">
                <span className="text-md text-slate-600">Overall</span>
              </div>
            </div>
            <div className="bg-secondary-bg-light border-r-2 border-b-2">
              <div className="flex text-sm text-gray-500 h-12 items-center ml-3">$ 20</div>
            </div>
            <div className="bg-secondary-bg-light border-r-2">
              <div className="flex text-sm text-gray-500 h-12 items-center ml-3">$ 120</div>
            </div>
          </div>
        </div>
        <div className="flex uppercase bg-secondary-bg-light col-span-full justify-center items-center h-16 rounded-sm">
          Items-Listing
        </div>
        <div className="col-span-full h-32 rounded-sm">
          <div class="grid grid-flow-row-dense grid-cols-4 md:grid-cols-3 grid-rows-2 gap-2">
            <div class="col-span-2 md:col-span-1">
              <div className="flex h-12 items-center justify-between bg-secondary-bg-light shadow-sm overflow-hidden rounded-sm">
                <div className="bg-blue-300 h-12 w-12 flex items-center justify-center">
                  <AiFillPlusSquare color="white" className="text-3xl" />
                </div>
                <span className="text-sm mr-2 text-gray-500">
                  Start new
                </span>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div className="flex h-12 items-center justify-between bg-secondary-bg-light shadow-sm overflow-hidden rounded-sm">
                <div className="bg-red-300 h-12 w-12 flex items-center justify-center">
                  <AiFillPlusSquare color="white" className="text-3xl" />
                </div>
                <span className="text-sm mr-2 text-gray-500">
                  Add Product
                </span>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div className="flex h-12 items-center justify-between bg-secondary-bg-light shadow-sm overflow-hidden rounded-sm">
                <div className="bg-green-300 h-12 w-12 flex items-center justify-center">
                  <AiFillPlusSquare color="white" className="text-3xl" />
                </div>
                <span className="text-sm mr-2 text-gray-500">
                  Add stock
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
