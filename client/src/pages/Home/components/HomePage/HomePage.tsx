import React from 'react'
import cl from "./HomePage.module.scss"
import { Header } from '../Header/Header'
import { Recent } from '../Recent/Recent'
import { Featured } from '../Featured/Featured'
export const HomePage = () => {
  return (
    <div className={cl.HomePage}>
        <Header/>
        <Recent/>
        <Featured/>
    </div>
  )
}
