import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import cl from "./Footer.module.scss"
export const Footer = () => {
  return (
    <div className={cl.Footer}>
        <div>
            <FaSquareFacebook size={window.innerWidth>450?"2.61vw":"8vw"}/>
            <FiInstagram  size={window.innerWidth>450?"2.61vw":"8vw"}/>
            <IoLogoTwitter size={window.innerWidth>450?"2.61vw":"8vw"}/>
            <SiLinkedin size={window.innerWidth>450?"2.61vw":"8vw"} style={{marginRight:"0"}}/>
        </div>
        <p>Copyright ©2020 All rights reserved</p>
    </div>
  )
}
