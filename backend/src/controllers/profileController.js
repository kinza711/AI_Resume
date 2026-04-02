import AIUser from "../Models/UserModel.js";

export const getProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const getprofile = await AIUser.findById(id);
    res.status(200).json({
      message: "profile  found succesfully",
      data: getprofile,
    });
  } catch (err) {
    res.status(500).json({
      message: "profile not found",
      error: err,
    });
    console.log(err, "profile not founs consloe");
  }
};

// update profile

export const UpdateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updateprofile = await AIUser.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "profile  updated succesfully",
      data: updateprofile,
    });
  } catch (err) {
    res.status(500).json({
      message: "profile not updated",
      error: err,
    });
    console.log(err, "profile not updated consloe");
  }
};
