import { BsChatLeftDots } from "react-icons/bs"; 
import { BsPlusLg } from "react-icons/bs"; 
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

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo " className="flex flex-col">
      
         
       

        <span  id="logo-title "
          className="font-barlowxl text-[48px] text-gray-900">
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>

        <div id="logo-subtitle" className="font-semibold text-gray-400">
          <span>Modern Admin Dashboard</span>
        </div>

        {/* List Menu */}
        <div id="sidebar-menu" className="mt-10">
          <ul id="menu-list" className="space-y-3">
            <li>
              <div
                id="menu-1"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                <span className="mr-4 text-xl"><BiHomeAlt /></span>
                Dashboard
              </div>
            </li>
            <li>
              <div
                id="menu-2"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                   <span className="mr-4 text-xl"><IoMdList /></span>
                Orders List
              </div>
            </li>
            <li>
              <div
                id="menu-2"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                   <span className="mr-4 text-xl"><BiFileBlank /></span>
                Orders Detail
              </div>
            </li>
            <li>
              <div
                id="menu-3"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                 <span className="mr-4 text-xl"><BsPeople /></span>
                Customers
              </div>
              <div
                id="menu-4"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                 <span className="mr-4 text-xl"><AiOutlineBarChart /></span>
                Analytics
              </div>
              <div
                id="menu-5"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                 <span className="mr-4 text-xl"><AiOutlineEdit /></span>
                Riviews
              </div>
              <div
                id="menu-6"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                  <span className="mr-4 text-xl"><RiCupLine /></span>
                Foods
              </div>
              <div
                id="menu-7"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                <span className="mr-4 text-xl"><BsPencilSquare /></span>
                Food Detail
              </div>
              <div
                id="menu-8"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                <span className="mr-4 text-xl"><AiOutlineUser /></span>
                Customer Detail
              </div>
              <div
                id="menu-9"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                <span className="mr-4 text-xl"><AiOutlineCalendar /></span>
                Calender
              </div>
              <div
                id="menu-10"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                 <span className="mr-4 text-xl"><BsChatLeftDots /></span>
                Chat
              </div>
              <div
                id="menu-11"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                 <span className="mr-4 text-xl"><BiWalletAlt /></span>
                Wallet
              </div>
              <div
                id="menu-12"
                className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
              >
                Customers
              </div>
            
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div id="sidebar-footer" className="mt-auto">
          <div
            id="footer-card"
            className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
          >
            <div id="footer-text" className="text-white text-sm">
              <span>Please organize your menus through button below!</span>
              <div
                id="add-menu-button"
                className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
              >
                {" "}
                <span>
                <BsPlusLg className="mr-4 text-xl text-black" />
                </span>
                <span className="text-black" >Add Menus</span>
              </div>
            </div>
            <img
              id="footer-avatar"
              className="w-20 rounded-full"
              src="https://avatar.iran.liara.run/public/28"
            />
          </div>
       
            <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
         
         
            <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
        
        </div>
      </div>
    </div>
  );
}
