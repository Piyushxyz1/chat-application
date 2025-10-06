import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.Routes.js';
import messageRoutes from "./routes/message.Routes.js";
import userRoutes from "./routes/user.Routes.js"
import mongoConn from './database/mongoDB.js'
import cookieParser from 'cookie-parser'; 



const app = express();

dotenv.config()
app.use(express.json())
app.use(cookieParser())



// app.get('/',(req,res)=>{

// res.send("hello deepesh!!")

// })


app.use('/api/auth',authRoutes)   // using this middleware app.use for routes
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)



const PORT = process.env.PORT || 5000
 // creates an http server

app.listen(PORT,()=>{    
    mongoConn()
    console.log(`server is running on ${PORT} `)
})


