import {React, useState} from 'react'
import { AiFillControl } from "react-icons/ai";
import { BsArrowRightShort, BsList } from "react-icons/bs";
import { BiCategoryAlt, BiDetail } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MdPayment, MdOutlineBorderColor, MdProductionQuantityLimits, MdMedicalServices } from "react-icons/md";
import { RiLayout4Fill, RiHome3Fill, RiUserVoiceFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Sidebar() {
    const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const [submenuOpenTwo, setsubmenuOpenTwo] = useState(false);
  const [submenuOpenThr, setsubmenuOpenThr] = useState(false);

    const Menus = [
        { title: "Dashboard", icon:<RiHome3Fill color='white'/> },
        {
          title: "Category",
          icon: <BiCategoryAlt color='white'/>,
          subMenu2: true,
          subMenuItemsTwo: [
            { title: "productone", icon: <GoPrimitiveDot color='white'/> },
            { title: "producttwo", icon: <GoPrimitiveDot color='white'/> },
            { title: "productthree", icon: <GoPrimitiveDot color='white' /> },
          ],
        },
        { title: "Payments", icon: <MdPayment color='white'/> },
        { title: "Role", icon: <AiFillControl color='white'/> },
        {
          title: "Product",
          icon: <MdProductionQuantityLimits color='white'/>,
          subMenu: true,
          subMenuItems: [
            { title: "productone", icon: <GoPrimitiveDot color='white'/> },
            { title: "producttwo", icon: <GoPrimitiveDot color='white'/> },
            { title: "productthree", icon: <GoPrimitiveDot color='white'/> },
          ],
        },
        {
          title: "Supplier",
          icon: <MdMedicalServices color='white'/>,
          subMenu3: true,
          subMenuItemsThr: [
            { title: "productone", icon: <GoPrimitiveDot color='white'/> },
            { title: "producttwo", icon: <GoPrimitiveDot color='white'/> },
            { title: "productthree", icon: <GoPrimitiveDot color='white'/> },
          ],
        },
        { title: "Staff", icon: <FaUserTie color='white'/> },
        { title: "OrderDetail", icon: <BiDetail color='white'/> },
        { title: "Customer", icon: <RiUserVoiceFill color='white'/> },
        { title: "Order", icon: <MdOutlineBorderColor color='white'/> },
      ];

  return (
        <div
        className={`flex-2 bg-primary-bg-dark h-screen pt-8 ${
          open ? "w-48" : "w-12" 
        } ${
            open ? "md:w-56" : "md:w-16" 
          } duration-300 overflow-auto scroll-smooth relative scrollbar`}
      >
        <ul className="pt-2 text-gray-300">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer md:pl-5 sm:pl-3 pl-3 p-3 hover:bg-primary-bg-light focus:outline ${
                  menu.spacing ? "mt-6" : "mt-2"
                }`}
              >
                <span className="text-xl block float-left">
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <RiLayout4Fill className="text-2xl -ml-0.5" />
                  )}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  } duration-200`}
                >
                  <Link to='/'>
               {menu.title}
                  </Link>
                </span>
                <Link to='/payment'>
                {menu.subMenu && open && (
                  <BsArrowRightShort 
                    className={`text-2xl ${submenuOpen && "rotate-90"}`}
                    onClick={() => setsubmenuOpen(!submenuOpen)}
                  />
                )}
                </Link>
                {menu.subMenu2 && open && (
                  <BsArrowRightShort
                    className={`text-2xl ${submenuOpenTwo && "rotate-90"}`}
                    onClick={() => setsubmenuOpenTwo(!submenuOpenTwo)}
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
              {menu.subMenu2 && submenuOpenTwo && open && (
                <ul>
                  {menu.subMenuItemsTwo.map((submenuItemTwo, index) => (
                    <li
                      key={index}
                      className="text-primary-text-dark text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary-bg-light"
                    >
                      <div className="text-xl ml-2 p-1">
                        {submenuItemTwo.icon}
                      </div>
                      {submenuItemTwo.title}
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
          <BsList color='white'
          className="absolute top-0 right-3 md:right-5 text-primary-text-dark mt-4 text-3xl rounded cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        </ul>
    </div>
  )
}

export default Sidebar;