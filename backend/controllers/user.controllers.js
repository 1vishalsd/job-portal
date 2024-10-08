import { trusted } from "mongoose";
import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        massage: "Something is missing",
        success: false,
      });
    }
    const user = await User.find({ email });
    if (user) {
      return res.status(400).json({
        massage: "User already exist this email",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
  } catch (error) {}
};

export const login = async () => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        massage: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
  } catch (error) {}
};
