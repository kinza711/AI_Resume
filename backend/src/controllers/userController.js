import AIUser from "../Models/UserModel.js";

export const GetUsers = async (req, res) => {
  try {
    const allusers = await AIUser.find();
    res.status(200).json({
      mesasge: "all users found successfully",
      data: allusers,
    });
  } catch (err) {
    console.error(err, "user not found");
  }
};

// delete user
export const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await AIUser.findByIdAndDelete(id);
    res.status(200).json({
      mesasge: " users deleted successfully",
      data: deleteuser,
    });
  } catch (err) {
    console.error(err, "user not deleted");
  }
};

//update user
export const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await AIUser.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      messasge: " users updated successfully",
      data: updateuser,
    });
  } catch (err) {
    console.error(err, "user not updated");
  }
};

// edit user via id
export const EditUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const editusers = await AIUser.findById(id);

    res.status(200).json({
      message: "Allusers found successfully",
      data: editusers,
    });
  } catch (err) {
    res.status(500).json({
      message: "users not found",
      error: err,
    });
  }
};
