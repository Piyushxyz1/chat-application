import jwt from 'jsonwebtoken';  // importing jsonwebtoken for generating tokens as well as to set cookies

const generateTokenandSetCookie =(userID,res)=>{
  
const token =  jwt.sign({userID},process.env.JWT_SECRET,
{expiresIn:'15days'})

res.cookie('token',token,{
 maxAge: 15 * 24 * 60 * 60 * 1000 ,
 httpOnly: true, // prevent XSS attacks and cross-site scripting attacks
 sameSite: 'strict',
 secure: process.env.NODE_ENV !== 'development' // CSRF attacks  cross-site request forgery attacks
})

}

export default generateTokenandSetCookie ;