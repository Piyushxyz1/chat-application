import mongoose from "mongoose";   // here required to connect to our Mongodb database


const connectDB = async()=>{

try {
    
  const connect = await mongoose.connect(process.env.MONGO_DB_URI)
  if(connect){

    console.log('database connection established')
  }

} catch (error) {
    console.log(`error occured ${error.message}`)
}

}

export default connectDB