import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });
};

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const admin = await Admin.findOne({ email: userName });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        token: generateToken(admin._id)
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
