import React from "react";
import steel from "../../assets/steel.jpg";
import concrete from "../../assets/concrete.jpg";
import { AiFillDelete } from "react-icons/ai";
import CateUpdate from "./CateUpdate";

const CateItems = (props) => {
  const { category } = props;

  return (
    <>
      <div className="col-span-4 bg-white h-[600px] m-2 overflow-auto scrollbar">
        <div class="flex flex-col">
          <div class="o sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-bold text-gray-900 px-8 py-4 "
                      >
                        Cate-Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-gray-900 px-6 py-4 "
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-gray-900 px-6 py-4 "
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-gray-900 px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b bg-slate-300">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        Steel
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        Model V steel
                      </td>
                      <td class="text-sm text-gray-900 font-light px-8 py-1 whitespace-nowrap flex justify-center">
                        <img
                          src={steel}
                          alt=""
                          className="h-12 w-12 object-cover mt-[2px]"
                        />
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex justify-center items-center">
                          <div
                            className="bg-blue-400 p-1 pr-2 pl-2 mr-2 rounded-md text-blue-100 cursor-pointer"
                            onClick={() => setShowModal(true)}
                          >
                            Edit
                          </div>
                          <AiFillDelete
                            size={28}
                            className="bg-red-400 p-1 text-[#ffffff] rounded-md cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b bg-slate-300">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        Concrete
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        Keceman
                      </td>
                      <td class="text-sm text-gray-900 font-light px-8 py-1 whitespace-nowrap  flex justify-center">
                        <img
                          src={concrete}
                          alt=""
                          className="h-12 w-12 object-cover mt-[2px]"
                        />
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex justify-center items-center">
                          <div className="bg-blue-400 p-1 pr-2 pl-2 mr-2 rounded-md text-blue-100 cursor-pointer">
                            Edit
                          </div>
                          <AiFillDelete
                            size={28}
                            className="bg-red-400 p-1 text-[#ffffff] rounded-md cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CateUpdate />
    </>
  );
};

export default CateItems;
