import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();
connectDB();

const createAdmin = async () => {
  try {
    const admin = await Admin.create({
      name: "Akash",
      email: "karumuriakash888@gmail.com",
      password: "Akash888"
    });

    console.log("Admin created:", admin.email);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
