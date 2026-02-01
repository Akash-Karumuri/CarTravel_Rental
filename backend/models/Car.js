import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  name: String,
  type: String,
  seatingCapacity: Number,
  features: [String],
  pricePerDay: Number,
  imageUrl: String
});

export default mongoose.model("Car", carSchema);
