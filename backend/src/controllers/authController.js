import AIUser from "../Models/UserModel.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const register = await AIUser.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: "user created successfully",
      data: register,
    });
  } catch (err) {
    console.log(err, "user not registered");
  }
};
