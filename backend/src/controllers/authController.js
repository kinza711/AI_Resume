import AIUser from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

// register users

export const Register = async (req, res) => {
  try {
    const { name, role, email, password } = req.body;

    // if (!req.file) {
    //   return res.status(400).json({
    //     message: "Profile image is required",
    //   });
    // }
    // if user already registered
    const ExistingUser = await AIUser.findOne({ email });
    if (ExistingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const register = await AIUser.create({
      name,
      role,
      email,
      password: hashpassword,
    });
    res.status(201).json({
      message: "user created successfully",
      data: register,
    });
  } catch (err) {
    console.log(err, "user not registered");
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

//login uesr

export const Login = async (req, res) => {
  try {
    // add info
    const { email, password, role } = req.body;
    //find email
    const user = await AIUser.findOne({ email });
    // find user
    if (!user) {
      return res.status(401).json({
        message: "Email not exist please register",
      });
    }
    // match role
    if (role !== user.role) {
      return res.status(403).json({
        message: "Invalid credintials",
      });
    }

    // match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({
        message: "email or password is incorrrect invalid crediantials",
      });
    }

    // ✅ generate token using your separate function
    const token = generateToken(user);

    // for cloudinary pics
    // let picUrl = user.pic;

    // if (user.pic && !picUrl.startsWith("https")) {
    //   picUrl = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/${picUrl}`;
    // }

    res.status(200).json({
      message: "Wellcome Back",
      data: user,
      user: {
        token: token,
        name: user.name,
        //id: user._id,
        email: user.email,
        role: user.role,
        //pic: user.pic,
        heading: user.heading,
      },
    });
    console.log(user);
  } catch (err) {
    console.error(err, "login issue");
    res.status(500).json({
      message: "user not loggedin",
      error: err.message,
    });
  }
};

//logout
export const Logout = async (req, res) => {
  try {
    res.status(200).json("Logout Successfully");
  } catch (err) {
    console.error(err, "user not logout");
    res.status(500).json({
      message: "user not logout",
      error: err.message,
    });
  }
};
