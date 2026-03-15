import express from "express";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";
import Service from "../models/Service.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const totalCars = await Car.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalServices = await Service.countDocuments();

    res.json({
      totalCars,
      totalBookings,
      totalServices
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;