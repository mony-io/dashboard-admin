import React from "react";
import { RiMailFill } from "react-icons/ri";
import { AiFillPlusSquare } from "react-icons/ai";

function Dashboard() {
  return (
    <div className="flex-1">
      <span className="flex uppercase text-md text-slate-900 lg:h-24 lg:mb-6 mb-4 tracking-wider h-16 items-center justify-center bg-secondary-bg-light shadow-sm m-2 rounded-sm">
        ស្វាគមន៏មកកាន់​​ P.S.S លក់គ្រឿងសំណង់
      </span>
      <div className="grid grid-cols-4 gap-4 m-2">
        <div className="bg-secondary-bg-light h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Stock</span>
          </div>
          <div className="h-18 bg-red-400 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="bg-secondary-bg-light h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Outstock</span>
          </div>
          <div className="h-18 bg-blue-400 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="bg-secondary-bg-light h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Product</span>
          </div>
          <div className="h-18 bg-green-400 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="bg-secondary-bg-light lg:mb-2 h-20 flex justify-between col-span-4 md:col-span-2 shadow-sm rounded-sm overflow-hidden">
          <div className="flex p-2 mt-2 justify-between flex-col text-slate-600">
            <span className="text-2xl">200</span>
            <span className="text-md text-gray-400">Overall</span>
          </div>
          <div className="h-18 bg-yellow-400 flex items-center justify-center w-24">
            <RiMailFill color="white" size={70} />
          </div>
        </div>
        <div className="col-span-full lg:mb-2 bg-secondary-bg-light shadow-sm">
          <div class="grid grid-rows-1 grid-flow-col gap-0 gap-x-0 border border-gray-300 rounded-sm overflow-hidden">
            <div className="rounded-lg shadow overflow-auto scroll-smooth scrollbar md:block">
              <table className="w-full table-auto">
                <thead className="bg-gray-50 border-gray-200">
                  <tr className="border-b-2 border-gray-100">
                    <th className="p-3 text-sm text-center">ID</th>
                    <th className="p-3 text-sm text-center">Title</th>
                    <th className="p-3 text-sm text-center">Author</th>
                    <th className="p-3 text-sm text-center">Products</th>
                    <th className="p-3 text-sm text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center bg-white border-b-2 border-gray-100">
                    <td className="p-3 text-sm text-blue-500 font-bold whitespace-nowrap"></td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
                    <td className="p-3 whitespace-nowrap">
                      <button className="mx-2 px-5 py-1.5 rounded-sm font-medium tracking-wider text-white bg-blue-400 hover:shadow">
                        Add
                      </button>
                      <button className="px-4 py-1.5 rounded-sm font-medium tracking-wider text-white bg-red-400 hover:shadow">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex uppercase bg-secondary-bg-light lg:mb-2 col-span-full justify-center items-center h-16 rounded-sm">
          Items-Listing
        </div>
        <div className="col-span-full h-48 rounded-sm">
          <div class="grid grid-flow-row-dense grid-cols-4 md:grid-cols-3 grid-rows-2 gap-2">
            <div class="col-span-2 md:col-span-1">
              <div className="flex h-12 md:h-16 items-center justify-between bg-secondary-bg-light shadow-sm overflow-hidden rounded-sm">
                <div className="bg-blue-400 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
                  <AiFillPlusSquare color="white" className="text-3xl" />
                </div>
                <span className="text-sm mr-2 text-gray-500">Start new</span>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div className="flex h-12 md:h-16 items-center justify-between bg-secondary-bg-light shadow-sm overflow-hidden rounded-sm">
                <div className="bg-red-400 h-12 w-12 md:h-16 md:w-16  flex items-center justify-center">
                  <AiFillPlusSquare color="white" className="text-3xl" />
                </div>
                <span className="text-sm mr-2 text-gray-500">Add Product</span>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div className="flex h-12 md:h-16 items-center justify-between bg-secondary-bg-light shadow-sm overflow-hidden rounded-sm">
                <div className="bg-green-400 h-12 md:h-16 md:w-16 w-12 flex items-center justify-center">
                  <AiFillPlusSquare color="white" className="text-3xl" />
                </div>
                <span className="text-sm mr-2 text-gray-500">Add stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
