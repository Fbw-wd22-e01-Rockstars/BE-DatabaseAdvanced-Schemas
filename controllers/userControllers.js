import User from "../models/User.js";

export const getUsers = async (req, res, next) => {
  let users = await User.find();
  res.send(users);
};

export const addUser = async (req, res, next) => {
  const info = req.body;
  try {
    const user = await User.create(info);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
