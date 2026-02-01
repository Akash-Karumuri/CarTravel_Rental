import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  service: String,
  car: String,
  days: Number
});

export default mongoose.model("Booking", bookingSchema);
