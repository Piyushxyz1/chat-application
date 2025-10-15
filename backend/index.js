
import path from 'path';
import dotenv from 'dotenv'
import express  from'express'
import authRoutes from './routes/auth.Routes.js';
import messageRoutes from "./routes/message.Routes.js";
import userRoutes from "./routes/user.Routes.js"
import cookieParser from 'cookie-parser'; 
import mongoConn from './database/mongoDB.js'
import { app,server } from './socket/socket.js';


dotenv.config()
const __dirname =  path.resolve();

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())




app.use('/api/auth',authRoutes)   // using this middleware app.use for routes
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("/*splat", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});





 // creates an http server

server.listen(PORT,()=>{    
    mongoConn()
    console.log(`server is running on ${PORT} `)
})


