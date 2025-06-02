import { MdFastfood } from "react-icons/md"; 
import { CiUser } from "react-icons/ci"; 
import { Link, NavLink } from "react-router-dom";
import { RiCupLine } from "react-icons/ri";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiFileBlank } from "react-icons/bi";
import { IoMdList } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
export default function ListMenu(){
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
    return(
              

                <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                  <li>
                    <NavLink id="menu-1" to="/" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <BiHomeAlt className="mr-4 text" />
                
                      </span>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                      <NavLink
                              id="menu-4"
                              to="/products"
                              className={menuClass}
                          >
                              <MdFastfood className="mr-4 text-xl" />
                              Products
                      </NavLink>
                  </li>
                  <li>
                    <NavLink id="menu-14" to="User" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <CiUser className="mr-4 text" />
                        
                      </span>
                      User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink id="menu-2" to="Orders" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <IoMdList className="mr-4 text" />
                      </span>
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink id="menu-3" to="Orders Detail" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <BiFileBlank className="mr-4 text" />
                      </span>
                      Orders Detail
                    </NavLink>
                  </li>
                  <li>
                    <NavLink id="menu-4" to="Customers" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <BsPeople className="mr-4 text" />
                      </span>
                      Customers
                    </NavLink>
                    <NavLink id="menu-5" to="Analytics" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <AiOutlineBarChart className="mr-4 text" />
                      </span>
                      Analytics
                    </NavLink>
                    <NavLink id="menu-6" to="Riviews" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <AiOutlineEdit className="mr-4 text" />
                      </span>
                      Riviews
                    </NavLink>
                    <NavLink id="menu-7" to="Foods" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <RiCupLine className="mr-4 text" />
                      </span>
                      Foods
                    </NavLink>
                    <NavLink id="menu-8" to="Food Detail" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <BsPencilSquare className="mr-4 text" />
                      </span>
                      Food Detail
                    </NavLink>
                    <NavLink id="menu-9" to="Customer Detail" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <AiOutlineUser className="mr-4 text" />
                      </span>
                      Customer Detail
                    </NavLink>
                    <NavLink id="menu-10" to="Calender" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <AiOutlineCalendar className="mr-4 text" />
                      </span>
                      Calender
                    </NavLink>
                    <NavLink id="menu-11" to="Chat" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <BsChatLeftDots className="mr-4 text" />
                      </span>
                      Chat
                    </NavLink>
                    <NavLink id="menu-12" to="Wallet" className={menuClass}>
                      <span className="mr-4 text-xl">
                        <BiWalletAlt className="mr-4 text" />
                      </span>
                      Wallet
                    </NavLink>
                  
                  </li>
                </ul>
              </div>
              
    )
}