import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Car Travels API Running");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});


app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/services", serviceRoutes);
