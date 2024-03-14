import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { isAuthRouter,isUnAuthRouter} from './router'
import { useAppSelector } from '../hooks/redux'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
export const AppRouter = () => {
  const token = useAppSelector(state=>state.tokens.accessToken)
  return (
        <>
          {token
          ? <>
              <Navbar/>
              <Routes>
                {
                  isAuthRouter.map((a)=>{
                        return <Route path={a.path} element={a.component} key={a.path}/>
                    })
                        
                }  
                <Route path='*' element={<Navigate to="/home" replace/>}/> 
              </Routes>
              <Footer/>
          </>
          :<Routes>
            {
              isUnAuthRouter.map((a)=>{
                    return <Route path={a.path} element={a.component} key={a.path}/>
                })
                    
            }  
            <Route path='*' element={<Navigate to="/login" replace/>}/>          
          </Routes>
          }

        </>
  )
}
