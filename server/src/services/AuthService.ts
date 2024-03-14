import * as path from 'path';
import fs from "fs"
import bcrypt from "bcryptjs"
import ApiError from "../exceptions/api-error";
import TokenService from "./TokenService";

interface loginAndRegister{
    name: string;
    password: string;
    email:string;
}
interface user{
    name: string;
    email:string;
    password:string;
    id:number;
}

const findUser = (name?:string, email?:string, id?:number)=>{
    const users:user[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../api/user/user.json")).toString())
    let user = null;
    if(name && email ) user = users.find(a=>a.name === name || a.email===email)
    if(id) user = users.find(a=>a.id == id)
    return {user,users}
}


class AuthService{
    async login(data:loginAndRegister){
        const {user} = findUser(data.name, data.email)
        if(!user) throw ApiError.BadRequest("Пользователь не найден.") 
        if(user.name !== data.name || user.email !== data.email) throw ApiError.BadRequest("Неверно введены имя или пароль.")
        const validPassword = bcrypt.compareSync(data.password, user.password)
        if(!validPassword) throw ApiError.BadRequest("Неверно введены имя или пароль.")
        const tokens = TokenService.generateToken({id:user.id,email:user.email})
        const {id,email,name} = user
        await TokenService.saveToken(user.id, tokens.refreshToken)
        return {...tokens, user:{id,email,name}}
    }
    async register(data:loginAndRegister){
        const {user,users} = findUser(data.name, data.email)
        if(user) throw ApiError.BadRequest("Пользователь с таким именем или почтой уже существует.")
        const hashPassword = bcrypt.hashSync(data.password,7)
        const id = Math.round(Math.random()*1000000000000)
        const userData:user = {id, name: data.name, email:data.email, password:hashPassword} 
        users.push(userData)
        fs.writeFileSync(path.resolve(__dirname, "../api/user/user.json"), JSON.stringify(users))

        const tokens = TokenService.generateToken({id,email:data.email}) 
        await TokenService.saveToken(id,tokens.refreshToken)
        return {...tokens, user:{id,name:data.name, email:data.email}}
    }
    async logout(token:string){
        await TokenService.deleteToken(token)
    }
    async refresh(token:string){
        if(!token) throw ApiError.UnAuthorizedError()
        const validToken = TokenService.validRefreshToken(token)
        const existToken = await TokenService.findToken(token) 
        if(!validToken || !existToken) throw ApiError.UnAuthorizedError()
        const {user} = findUser("","", existToken.id)
        if(!user) throw ApiError.BadRequest("Пользователь не найден.")
        const newTokens = TokenService.generateToken({id:user.id, email:user?.email})
        await TokenService.saveToken(user.id, newTokens.refreshToken)
        const {id,email,name} = user;
        return {...newTokens, user:{id,email,name}}
    }
}
export default new AuthService()