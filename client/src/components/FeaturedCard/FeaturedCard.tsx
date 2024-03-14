import React from 'react'
import cl from "./FeaturedCard.module.scss"
interface props{
    img:string;
    title:string;
    year:number;
    type:string;
    description:string;

}


export const FeaturedCard = ({img,title,year,type,description}:props) => {
  return (
    <div className={cl.FeaturedCard}>
        <img src={img} alt="" />
        <div>
            <h2>{title}</h2>
            <p><span>{year}</span> {type}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}
