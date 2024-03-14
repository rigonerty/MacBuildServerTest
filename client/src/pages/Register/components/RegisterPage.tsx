import React, {useEffect} from 'react'
import { useRegisterMutation } from '../../../store/api/authApi'
import { useAppDispatch } from '../../../hooks/redux'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useForm } from 'react-hook-form'
import { InputForm } from '../../../components/InputForm/InputForm'
import { IRegisterInputsForm } from '../types/interfaces'
import { addAccessToken } from '../../../store/slices/tokens'
import cl from "./RegisterPage.module.scss"
import { Button } from '../../../ui/Button/Button'
export const RegisterPage = () => {
  const {register,handleSubmit,formState:{errors},reset,watch,setError} = useForm<IRegisterInputsForm>({mode:"onChange"})
  const [sendRequest, {data,error,isLoading}] = useRegisterMutation()
  const dispatch = useAppDispatch()
  const onSubmit:SubmitHandler<IRegisterInputsForm> = (inputData)=>{
    const {name,email,password} = inputData
    sendRequest({name,email,password})
  }
  useEffect(()=>{
    if(error && "status" in error){
      const formError = { type: "server", message: "Пользователь с таким именем или почтой уже существует." }
      setError("name", formError)
    }
  },[error])
  if(data) {
    reset()
    localStorage.setItem("token", data.accessToken)
    dispatch(addAccessToken(data))
  }
  return (
    <div className={cl.Register}>
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
                <InputForm secureTextEntry label="Confirm password" name='confirmPassword' errors={errors} register={register("confirmPassword",{
                  required:true,
                  maxLength:30,
                  minLength:8,
                  validate: (val:string)=>{
                    if(watch("password")!==val) return "Your Password do not match!"
                  }
                })}/>
            <div className={cl.submitDiv}>
              <Button type="submit" disabled={isLoading}>Register</Button> 
              <Link to={"/login"}>Login</Link>
            </div>
        </form>
        
    </div>
  )
}
