import express from "express";
import Car from "../models/Car.js";

const router = express.Router();

// Get all cars
router.get("/", async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

// Add car
router.post("/", async (req, res) => {
  const car = await Car.create(req.body);
  res.json(car);
});

// Delete car
router.delete("/:id", async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car removed" });
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
