import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create booking
router.post("/", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
});

// Get all bookings
router.get("/", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

export default router;
