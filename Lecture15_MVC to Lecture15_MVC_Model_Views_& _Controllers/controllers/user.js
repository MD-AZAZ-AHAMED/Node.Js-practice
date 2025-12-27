import {User} from '../Models/User.js';

export const userRegister = async(req, res) => {
  //console.log("Getting the data from body", req.body)
  try {
    let user = await  User.create(req.body);
    res.json({ message: "User Created  Successfully",NewUser:user, success: true });
  } catch (error) {
    res.json({message:"Error in creating user", error: error.message});
  }
  
}