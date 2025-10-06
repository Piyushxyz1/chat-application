
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req,res)=>{

try {
    const {message}  = req.body;
    const {id:recieverId} =req.params;
    const senderId = req.user._id;
    console.log(senderId)

    let conversation = await Conversation.findOne({
    Participants:{$all:[senderId,recieverId]}

    })

    if(!conversation){
        conversation =  await Conversation.create({
      participants:[senderId,recieverId]  
        })


    }
    const newMessage = new Message({
     senderId:senderId,
     recieverId:recieverId,
     message:message
    })

    if (newMessage) conversation.messages.push(newMessage._id);

    await Promise.all([conversation.save(),newMessage.save()])

    res.status(201).json({message:newMessage})
    
} catch (error) {
    console.log("error in sendMessage controller",error)
    res.status(500).json({error:"internal server error"})
}


}



export const getMessages = async(req,res)=>{

    try{
     
         const {id:usertoChatId} = req.params;

         const senderId = req.user._id;

        const conversation =  await  Conversation.findOne({
          participants:{$all:[senderId,usertoChatId]},

        })
        .populate("messages")
       

       if(!conversation) res.status(200).json([]) 

     const messages = conversation.messages

     res.status(200).json(messages)
    }

    catch(error){

  console.log("error in getMessages controller",error)
    res.status(500).json({error:"internal server error"})

    }
}