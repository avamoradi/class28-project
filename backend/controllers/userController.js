import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import Mailchimp from "mailchimp-api-v3";

// Auth user & get a token: POST /api/users/login (public)
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      newsletterSubscription: user.newsletterSubscription,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// Get user profile & get a token: GET /api/users/profile (private)
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      newsletterSubscription: user.newsletterSubscription,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Register a new user: POST /api/users (public)
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, subscription } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Check - Subscribe - True or false to DB
  // const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
  const isSubscribed = await mailchimp.get(`/search-members`, { query: email });
  console.log(isSubscribed);
  // {
  //   [0]   exact_matches: { members: [], total_items: 0 },
  //   [0]   full_search: { members: [], total_items: 0 },
  //   [0]   _links: [
  //   [0]     {
  //   [0]       rel: 'self',
  //   [0]       href: 'https://us7.api.mailchimp.com/3.0/search-members',
  //   [0]       method: 'GET',
  //   [0]       targetSchema: 'https://us7.api.mailchimp.com/schema/3.0/Definitions/SearchMembers/Response.json'
  //   [0]     }
  //   [0]   ],
  //   [0]   statusCode: 200
  //   [0] }

  const user = await User.create({
    name,
    email,
    password,
    newsletterSubscription: subscription,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      newsletterSubscription: user.newsletterSubscription,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Update user profile: PUT /api/users/profile (private)
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
      newsletterSubscription: updatedUser.newsletterSubscription,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Get all users: GET /api/users (private/Admin)
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// Delete user: DELETE /api/users/:id (private/Admin)
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Get user by id: GET /api/users/:id (private/Admin)
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Update user: PUT /api/users/:id (private/Admin)
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      newsletterSubscription: updatedUser.newsletterSubscription,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Subscribe a user for newsletter: POST /api/users/subscribe (public)
const subscribeUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (user && user.newsletterSubscription) {
    res.status(400);
    throw new Error("Subscription failed: Member Exists");
  }

  const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

  try {
    let subscription = await mailchimp.post(`/lists/${listId}/members`, {
      email_address: email,
      status: "subscribed",
    });
    if (user && subscription.status === "subscribed") {
      user.newsletterSubscription = true;
      await user.save();
    }
    res.json({ message: "Subscription completed!" });
  } catch (error) {
    res.status(500);
    throw new Error("Subscription failed: " + error.title);
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  subscribeUser,
};
