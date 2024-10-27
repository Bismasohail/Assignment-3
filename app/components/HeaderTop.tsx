import React from "react"
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
const HeaderTop = () => {
  return (
    <div className ="border-b border-gray-200 hidden sm:block">
        <div className="container py-6 mx-20 ">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    
                    <div className="header_top__icon_wrapper"> 
                        <FaFacebook />
                    </div>
                    <div className="header_top__icon_wrapper"> 
                        <BsInstagram />
                    </div>
                    <div className="header_top__icon_wrapper"> 
                        <IoLogoWhatsapp />
                    </div>
                    <div className="header_top__icon_wrapper"> 
                        <BsLinkedin />
                    </div>
                </div>
                <div className="text-gray-500 text-[14px] mx-20 ">
                    <b>FREE DELIVERY</b> THIS WEEK ORDER OVER $700
            </div>  
                </div>
        </div>
    </div>

  )
}

export default HeaderTop;
