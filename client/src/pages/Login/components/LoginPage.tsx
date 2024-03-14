import React,{useEffect} from 'react'
import { useLoginMutation } from '../../../store/api/authApi'
import { useAppDispatch } from '../../../hooks/redux'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useForm } from 'react-hook-form'
import { InputForm } from '../../../components/InputForm/InputForm'
import { ILoginInputsForm } from '../types/interfaces'
import { addAccessToken } from '../../../store/slices/tokens'
import cl from "./LoginPage.module.scss"
import { Button } from '../../../ui/Button/Button'
 export const LoginPage = () => {
  const [sendRequest,{data,error, isLoading}] = useLoginMutation()
  const {register,handleSubmit,formState:{errors},reset,setError} = useForm<ILoginInputsForm>({mode:"onChange"})
  const dispatch = useAppDispatch()
  const onSubmit:SubmitHandler<ILoginInputsForm> = (inputData)=>{
    const {name,email,password} = inputData
    sendRequest({name,email,password})
  }
  useEffect(()=>{
    if(error && "status" in error){
      const formState= {type:"server", message:"Имя пользователя, почта или пароль введены не верно."}
      setError("name",formState)
    }
  },[error])
    useEffect(()=>{
      console.log(isLoading)
  },[isLoading])
  if(data && !error){
    reset()
    localStorage.setItem("token", data.accessToken)
    dispatch(addAccessToken(data))
  }
  return (
    <div className={cl.Login}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm label="Name" name="name" errors={errors} register={register("name", {
                required: true,
                maxLength:20,
                minLength:4})}/>
            <InputForm label="Email" name="email" errors={errors} register={register("email", {
                required: true,
                pattern:{
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message:"Please enter valid email"
                },
                maxLength:40,
                minLength:4})}/>
                <InputForm secureTextEntry label="Password" name='password' errors={errors} register={register("password",{
                  required:true,
                  maxLength:30,
                  minLength:8
                })}/>
            <div className={cl.submitDiv}>
              <Button type="submit" disabled={isLoading}>Login</Button> 
              <Link to={"/register"}>Register</Link>
            </div>
        </form>
        
    </div>
  )
}
