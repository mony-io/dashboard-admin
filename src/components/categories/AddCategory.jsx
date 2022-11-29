import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import data from "../../data";
import { useState } from "react";
import Main from "./Main";

function AddCategory() {
  const category = data.category;

  const [showModal, setShowModal] = React.useState(false);
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div class="grid grid-cols-4 gap-4">
            <div className="col-span-4 bg-slate-500 h-20 flex justify-between items-center">
              <div className="flex items-center h-20 ml-4">
                <input
                  type="search"
                  className="w-28 p-1 mt-6 border outline-none text-sm"
                  placeholder="Search-Item"
                />
                <div className="flex flex-col ml-6">
                  <span className="mb-1 text-sm">Fields:</span>
                  <select
                    name=""
                    id=""
                    className="text-sm outline-none border h-[29px]"
                  >
                    <option value="" selected>
                      All
                    </option>
                    <option value="">Home</option>
                    <option value="">About</option>
                    <option value="">Skill</option>
                    <option value="">Content</option>
                    <option value="">Product</option>
                  </select>
                </div>
                <div className="flex flex-col ml-6">
                  <span className="mb-1 text-sm">Fields:</span>
                  <select
                    name=""
                    id=""
                    className="text-sm outline-none border h-[29px]"
                  >
                    <option value="" selected>
                      All
                    </option>
                    <option value="">Home</option>
                    <option value="">About</option>
                    <option value="">Skill</option>
                    <option value="">Content</option>
                    <option value="">Product</option>
                  </select>
                </div>
              </div>
              <div
                className="flex mr-12 bg-slate-50 p-1 pl-3 pr-3 mt-4"
                onClick={() => setShowModal(true)}
              >
                <button>Add Item</button>
              </div>
            </div>
            <Main category={category} />
          </div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-lg font-semibold uppercase">
                        Add category
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
                    <section className="my-6 mx-auto p-2 lg:p-10 bg-white rounded-lg shadow sm:p-10 h-auto w-full">
                      <form>
                        <div className="mb-2">
                          <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400 mt-4"
                          >
                            Category Name
                          </label>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-3 outline-none"
                            type="text"
                            name="title"
                            id="title"
                            required
                            // onChange={handleChange}
                          />
                          <span className="text-red-400 font-sm"></span>
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="date"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
                          >
                            Description
                          </label>
                          <textarea
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-3 outline-none"
                            name="date"
                            id="date"
                            required
                            // onChange={handleChange}
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="author"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
                          >
                            Image
                          </label>
                          <div className="flex justify-start">
                            <input type="file" onChange={onImageChange} />
                            <img
                              src={image}
                              alt=""
                              className="w-26 h-24 object-cover"
                            />
                          </div>
                        </div>
                      </form>
                    </section>
                    {/*footer*/}
                    <div className="flex items-center flex-col p-6 pt-0 border-t border-solid border-slate-200">
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
        </div>
      </div>
    </>
  );
}

export default AddCategory;
