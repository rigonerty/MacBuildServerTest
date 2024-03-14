import React from 'react'
import cl from "./Navbar.module.scss"
import { AiOutlineMenu } from "react-icons/ai";
export const Navbar = () => {
  return (
        <ul className={cl.Navbar}>
            <li>
                Home
            </li>
            <li>
                Blog       
            </li>
            <li>
                Contant                
            </li>
            <AiOutlineMenu size={"8vw"}/>
        </ul>

  )
}
