import express from "express";
const router = express.Router();
import {
  getNotification,
  deleteNotification,
} from "../controllers/notificationController.js";
import { protect } from "../middleware/authMiddleware.js";

// router.route("/").get(protect, getNotification);
router.route("/").get((req, res) => {
  res.send("adfeaf");
});
router.route("/:id").put(protect, deleteNotification);

export default router;
