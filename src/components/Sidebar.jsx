import { React, useState } from "react";
import { AiFillControl } from "react-icons/ai";
import { BsArrowRightShort, BsList } from "react-icons/bs";
import { BiCategoryAlt, BiDetail } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import {
  MdPayment,
  MdOutlineBorderColor,
  MdProductionQuantityLimits,
  MdMedicalServices,
} from "react-icons/md";
import { RiHome3Fill, RiUserVoiceFill } from "react-icons/ri";
import { FaUserTie, FaSellcast } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const [submenuOpenTwo, setsubmenuOpenTwo] = useState(false);
  const [submenuOpenThr, setsubmenuOpenThr] = useState(false);

  const Menus = [
    { titleDas: "Dashboard", icon: <RiHome3Fill color="white" /> },
    { titleSal: "Sale", icon2: <FaSellcast color="white" /> },
    {
      title2: "Category",
      icon3: <BiCategoryAlt color="white" />,
    },
    { title: "Payments", icon: <MdPayment color="white" /> },
    { title: "Role", icon: <AiFillControl color="white" /> },
    {
      title: "Product",
      icon: <MdProductionQuantityLimits color="white" />,
      subMenu: true,
      subMenuItems: [
        { title: "productone", icon: <GoPrimitiveDot color="white" /> },
        { title: "producttwo", icon: <GoPrimitiveDot color="white" /> },
        { title: "productthree", icon: <GoPrimitiveDot color="white" /> },
      ],
    },
    {
      title: "Supplier",
      icon: <MdMedicalServices color="white" />,
      subMenu3: true,
      subMenuItemsThr: [
        { title: "productone", icon: <GoPrimitiveDot color="white" /> },
        { title: "producttwo", icon: <GoPrimitiveDot color="white" /> },
        { title: "productthree", icon: <GoPrimitiveDot color="white" /> },
      ],
    },
    { title: "Staff", icon: <FaUserTie color="white" /> },
    { title: "OrderDetail", icon: <BiDetail color="white" /> },
    { title: "Customer", icon: <RiUserVoiceFill color="white" /> },
    { title: "Order", icon: <MdOutlineBorderColor color="white" /> },
  ];

  return (
    <div
      className={`flex-2 bg-primary-bg-dark h-auto pt-8 ${
        open ? "w-48" : "w-12"
      } ${
        open ? "md:w-56" : "md:w-16"
      } duration-300 overflow-auto scroll-smooth relative top-0 scrollbar`}
    >
      <ul className="pt-2 text-gray-300 mt-6">
        {Menus.map((menu, index) => (
          <>
            <li
              key={index}
              className={`text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[18px] p-3 hover:bg-primary-bg-light focus:outline ${
                menu.spacing ? "mt-6" : "mt-2"
              }`}
            >
              <span className="text-xl block float-left">
                <Link to="/">{menu.icon}</Link>
                <Link to="/sale">{menu.icon2}</Link>
                <Link to="/addcategory">{menu.icon3}</Link>
              </span>
              <span
                className={`text-base font-medium flex-1 ${
                  !open && "hidden"
                } duration-200`}
              >
                <Link to="/">{menu.titleDas}</Link>
                <Link to="/sale">{menu.titleSal}</Link>
                <Link to="/">{menu.title}</Link>
                <Link to="/addcategory">{menu.title2}</Link>
              </span>

              {menu.subMenu && open && (
                <BsArrowRightShort
                  className={`text-2xl ${submenuOpen && "rotate-90"}`}
                  onClick={() => setsubmenuOpen(!submenuOpen)}
                />
              )}
              {menu.subMenu3 && open && (
                <BsArrowRightShort
                  className={`text-2xl ${submenuOpenThr && "rotate-90"}`}
                  onClick={() => setsubmenuOpenThr(!submenuOpenThr)}
                />
              )}
            </li>
            {menu.subMenu && submenuOpen && open && (
              <ul>
                {menu.subMenuItems.map((submenuItem, index) => (
                  <li
                    key={index}
                    className="text-primary-text-dark flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary-bg-light"
                  >
                    <div className="text-xl ml-2 p-1">{submenuItem.icon}</div>
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
            {menu.subMenu3 && submenuOpenThr && open && (
              <ul>
                {menu.subMenuItemsThr.map((submenuItemThr, index) => (
                  <li
                    key={index}
                    className="text-primary-text-dark text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary-bg-light"
                  >
                    <div className="text-xl ml-2 p-1">
                      {submenuItemThr.icon}
                    </div>
                    {submenuItemThr.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
        <BsList
          color="white"
          className="absolute top-0 right-4 text-primary-text-dark mt-4 text-3xl rounded cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </ul>
    </div>
  );
}

export default Sidebar;
