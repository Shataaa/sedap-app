
import { BsPlusLg } from "react-icons/bs";


import ListMenu from "../layouts/ListMenu";
import Logo from "../layouts/Logo";

export default function Sidebar() {
  

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <Logo/>

        {/* List Menu */}
       <ListMenu/>

        {/* Footer */}
        
      </div>
  
  );
}
