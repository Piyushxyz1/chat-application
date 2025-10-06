import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenandSetCookie from "../utils/generateToken.js"



export const signup = async (req, res) => {

    try {
  const { fullName, username, password, confirmPassword, gender } = req.body  // get the fields input from the frontend
    
        if(!fullName || !username || !password || !confirmPassword || !gender) res.status(400).json({ message: 'please provide all the fields' })
      
        if (password !== confirmPassword) {                       // check if password field matches with the confirm password field
            res.status(400).json({ message: 'password does not match' })
        }
        const userExists = await User.findOne({ username })                     // check if the user exists or not if not proceed further
        if (userExists) {
            res.status(400).json({ message: 'user already exists' })
        }

        const saltRounds = 10;
        const hashedpassword = await bcrypt.hash(password, saltRounds)
        const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`      //get the profile pic using avatars api
        const girlpic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const newUser = new User({     //  if everything is good create the user in User model,make usre the field matches with the schema
            fullName,
            username,
            password: hashedpassword,
            gender,
            profilePic: gender === 'male' ? boypic : girlpic

        })

        if(newUser){
         generateTokenandSetCookie(newUser._id,res)
         newUser.save()  // After the user is created , save the user - always save the user first before sending the status or json message
         res.status(201).json({ success: "User created succesfully", message: newUser._id, fullName: newUser.fullName })

        }
        
        else{
            res.status(401).json({message: "Invalid User data"})
        }

    } catch (error) {
        res.status(500).json({ message: `error occured -${error.message}` })
    }

}



export const login = async (req, res) => {

     const { username, password } = req.body;

  // Check for missing fields
  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide all the fields' });
  }

  try {
    // Find user by username
    const user = await User.findOne({ username }); 
    if (!user) {
      return res.status(404).json({ message: 'Invalid username or password' });
    }

    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: 'Invalid username or password' });
    }
generateTokenandSetCookie(user._id,res)
    // Login success
    return res.status(200).json({ message: 'Welcome user',ID:user._id,name:user.username });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}



export const logout = async(req,res)=>{

try {

  res.cookie('token','',{maxAge: 0})
  res.status(200).json({message:"logged out succesfully"})
  
} catch (error) {
  console.log('error in logout controller',error.message);
  res.status(500).json({message:"Internal server error"})
}

}


