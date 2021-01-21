import Notification from "../models/notificationModel.js";
import User from "../models/userModel.js";

export const createNotification = async (
  userId,
  productId,
  type,
  productName
) => {
  const userCreatedNotification = await User.find({ _id: userId });

  const allUsers = await User.find({});
  const notifiedUsers = allUsers
    .map((user) => user._id)
    .filter((id) => id.toString() !== userId.toString());

  const notification = new Notification({
    user: userId,
    product: productId,
    message: `${userCreatedNotification[0].name} ${type} ${productName} product`,
    users: notifiedUsers,
  });
  await notification.save();
};
