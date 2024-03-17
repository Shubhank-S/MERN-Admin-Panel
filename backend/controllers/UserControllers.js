import UserModel from "../models/UserModel.js"
import { hashingPassword } from "../helpers/helpers.js"


export const UserController = async (req, resp) => {
  try {
    const { name, email, password, phone, secretAnswer, address } = req.body
    if (!name || !email || !password || !phone || !secretAnswer || !address) {
      return resp.send("Please Fill All the entries").status(400)
    }
    const userExist = await UserModel.findOne({ email })
    if (userExist) {
      return resp.send("User Already Exist").status(200)
    }
    // Hashing password

    const hash = await hashingPassword(password)
    const newUser = new UserModel({ name, email, password, phone, secretAnswer, address })
  
    const userSave = await newUser.save();
    resp.send({ message: "User Registered Successfully", userSave })
  } catch (error) {
    resp.send({ message: "User Registration Failed" }).status(400)
  }
}