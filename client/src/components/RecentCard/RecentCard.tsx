import React from 'react'
import cl from "./RecentCard.module.scss"
interface props{
    title:string;
    date:string;
    type:string[];
    description:string;
}

export const RecentCard = ({title,date,type,description}:props) => {
  return (
    <div className={cl.RecentCard}>
        <h2>{title}</h2>
        <p>{date}<span>|</span>{type.join(", ")}</p>
        <p>{description}</p>
    </div>
  )
}
