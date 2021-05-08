import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faDog,
  faBone,
  faCog,
  faBars,
  faTimes,
  faFileUpload,
  faPortrait,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom';

import logo from '../../logo.png'
import Avatar from "../Avatar"

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isLoggedin,setisLoggedin] =useState(false)
  return (
    <div className="flex items-center h-20 px-6 justify-between shadow-sm bg-white relative z-50">
      <a className="flex-1 no-underline block h-16">
        <img
          src={logo}
          className="h-full"
        />
      </a>
      <div className="flex-none hidden md:flex md:justify-center md:h-full">
        <Link to ={"/Home"}
         
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faHome} className="mr-3" /> Acceuil
        </Link>
        <Link to ={"/candidature"} className="block h-full flex items-center mx-4 px-2 border-b-2 border-black transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faPortrait} className="mr-3" /> Candidature
          </Link>

     
         <Link to ={"/Espace-client"}
         
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faUser} className="mr-3" /> Espace client
        </Link>
      </div>
      {isLoggedin&&(
      <div className="flex-1 items-center justify-end hidden md:flex">
      <a           className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
>
        <Avatar
          image="https://gustui.s3.amazonaws.com/avatar.png"
          className="cursor-pointer my-2"
        />
        UserName
        </a>
      </div>
      
      )}
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer md:hidden"
      />
      {mobileOpen && (
        <div className="bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
          <FontAwesomeIcon icon={faHome} className="mr-3" /> Acceuil
            </a>
            <a
              href="#"
              className="no-underline px-2 py-1 my-2 font-medium border-b-2 border-black hover:text-blue-400"
            >
          <FontAwesomeIcon icon={faPortrait} className="mr-3" /> Candidature
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
          <FontAwesomeIcon icon={faUser} className="mr-3" /> Espace client
            </a>
         
            <a  className="no-underline px-0 my-2 font-medium hover:text-blue-400">
            
            <Avatar
              image="https://gustui.s3.amazonaws.com/avatar.png"
              status="online"
              className="cursor-pointer my-2"
            />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
export default Nav
