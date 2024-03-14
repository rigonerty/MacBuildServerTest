import React from 'react'
import { Button } from '../../../../ui/Button/Button'
import cl from "./Header.module.scss"
export const Header = () => {
  return (
    <div className={cl.Header}>
        <div>
            <div className={cl.infoDiv}>
                <h1>
                    Hi, I am John, Creative Technologist
                </h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>         
            </div>
            <div className={cl.imgDiv}>
                <img src='https://s3-alpha-sig.figma.com/img/c316/adc4/65a80990af3a0075303343f0d615c92a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VL0rnuUcAp2kkrLzNh7rcC43s93BCMO5tLqYp6wIYFJGUW3SLvWh3X4P6wfgYG9ADUBPEYRqevJNekq01Lj4RWuME0i9wyZUXsHEBqRNXHxbUaZAb5NgBwuBxYRfdZaWAkaVWwCVgvk2hpBhkhhkmXr7fmxTk16z0xOKaANQGp4eEafi5Nxpwr419NKlwWNBobzrvkPwAy3K8qeHSiMnPWydJ1we81OMfbO1-XNCtCSpMK5ad02MCccMCcv1MiJCB0QpfLuCKhFodU2pxriLmmGWYnsKY7AojaQ2yGtBIF18aAm2j58VtN5S25YKa9VrA4GUdfaRPZrXQBGcyTJNow__'/>                
            </div>

        </div>
        <Button>Download Resume</Button>
    </div>
  )
}
