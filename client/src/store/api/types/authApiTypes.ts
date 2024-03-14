export interface ILoginRegister{
    name:string;
    password:string;
    email:string;
}
export interface IResponseAuth{
    refreshToken: string;
    accessToken: string; 
    user:{
        id:number;
        name:string; 
        email:string
    }
}