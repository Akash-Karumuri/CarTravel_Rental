import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  title: String,
  description: String
});

export default mongoose.model("Service", serviceSchema);
