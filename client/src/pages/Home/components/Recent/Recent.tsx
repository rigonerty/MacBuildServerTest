import React from 'react'
import { Link } from 'react-router-dom'
import cl from "./Recent.module.scss"
import { RecentCard } from '../../../../components/RecentCard/RecentCard'
export const Recent = () => {
  return (
    <div className={cl.Recent}>
        <div>
            <p>Recent posts</p>
            <Link to='#'>View all</Link>
        </div>
        <div>
            <RecentCard title="Making a design system from scratch" description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' date='12 Feb 2020' type={["Design","Pattern"]}/>
            <RecentCard title="Creating pixel perfect icons in Figma" description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' date="12 Feb 2020" type={["Figma","Icon Design"]}/>
        </div>
    </div>
  )
}
