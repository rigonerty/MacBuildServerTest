import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import AuthRouter from "./router/AuthRouter"
import errorMiddleware from './middlewares/errorMiddleware';
import cookieParser from "cookie-parser"
const app = express();

dotenv.config()

//Adds
app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}))
app.use(express.json({limit:"50mb"}))
app.use(errorMiddleware)
app.use(cookieParser())

//Routers
app.use("/auth",AuthRouter)




const port = process.env.PORT || 5000;
app.get('/', async (request, response) => {
  response.send(`
    <h1>Hey everyone, I make my fist typescript node project! 😁</h1>
    <p>PORT: ${port}</p>
  `);
});
app.listen(port, () => console.log(`Running on port ${port}`));



// interface music{
//   name: string;
//   author: number;
//   id:number;
//   album: number;
// }
// interface album{
//   name:string;
//   author: number;
//   id:number;
//   music: number[]
// }
// interface author{
//   name:string;
//   id:number;
//   music: number[]
// }