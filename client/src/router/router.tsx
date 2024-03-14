import { HomePage } from "../pages/Home"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"

export const isUnAuthRouter=[
    {path:"/login", component:<LoginPage/>},
    {path:"/register", component:<RegisterPage/>},
]


export const isAuthRouter = [
    {path:"/home", component:<HomePage/>},
]