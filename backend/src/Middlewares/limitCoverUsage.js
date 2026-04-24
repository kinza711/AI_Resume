import AIUser from "../Models/UserModel.js";

// export const limitCoverUsage = async (req, res, next) => {
//   try {
//     const userId = req.user?.id || req.user?._id;

//     if (!userId) {
//       return res.status(401).json({ message: "Unauthorized user" });
//     }

//     const user = await AIUser.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const today = new Date().toDateString();

//     const lastDate = user.coverUsageDate
//       ? new Date(user.coverUsageDate).toDateString()
//       : null;

//     // 🌿 reset only once per day
//     if (lastDate !== today) {
//       user.coverUsageCount = 0;
//       user.coverUsageDate = new Date();
//       await user.save();
//     }

//     const LIMIT = 1;

//     // 🚫 HARD BLOCK
//     if (user.coverUsageCount >= LIMIT) {
//       return res.status(403).json({
//         message: "Daily limit reached (2 cover letters/day)",
//       });
//     }

//     // 🌱 increment ONLY if allowed
//     user.coverUsageCount += 1;
//     await user.save();

//     console.log("USAGE UPDATED:", user.coverUsageCount);

//     return next();
//   } catch (err) {
//     console.error("LIMIT ERROR:", err);
//     return res.status(500).json({ message: "Limit middleware failed" });
//   }
// };

export const limitCoverUsage = async (req, res, next) => {
  try {
    console.log("LIMIT MIDDLEWARE HIT");
    const userId = req.user?.id || req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const user = await AIUser.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const today = new Date().toDateString();

    if (!user.coverUsageDate) {
      user.coverUsageDate = new Date();
    }

    const lastDate = new Date(user.coverUsageDate).toDateString();

    if (lastDate !== today) {
      user.coverUsageCount = 0;
      user.coverUsageDate = new Date();
      await user.save();
    }

    const LIMIT = 3;
    console.log("today is", user.coverUsageDate);

    if (user.coverUsageCount >= LIMIT) {
      return res.status(403).json({
        message: "Daily limit reached",
      });
    }

    req.userDoc = user; // 👈 pass user to controller

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Limit middleware failed" });
  }
};
