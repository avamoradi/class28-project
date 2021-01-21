import asyncHandler from "express-async-handler";
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

// Get Notifications: GET /api/notification (private)
const getNotification = asyncHandler(async (req, res) => {
  const allNotification = await Notification.find();

  const userId = req.user._id;

  const userNotification = allNotification.filter((notification) =>
    notification.users.includes(userId)
  );

  res.status(200).json(userNotification);
});

// Update(delete) Notifications: PUT /api/notification/:id (private)
// Remove the user id from the users array to remove the notification from his screen.
const deleteNotification = asyncHandler(async (req, res) => {
  const notification = await Notification.findById(req.params.id);
  const userId = req.user._id;

  if (notification) {
    const userIdsArray = notification.users.filter(
      (id) => id.toString() !== userId.toString()
    );
    notification.users = userIdsArray;
    await notification.save();

    res.status(200).json("Notification removed");
  } else {
    res.status(404);
    throw new Error("Notification not found");
  }
});

export { getNotification, deleteNotification };
