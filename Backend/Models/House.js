import mongoose from "mongoose";
import { PiNumpad } from "react-icons/pi";

const houseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  rooms: { type: Number, required: true },      // must match seed data
  bathrooms: { type: Number, required: true },
  images: [String],
  propertyType:{ type: String, required: true},
  area: {type:String, required:true}
});

const House = mongoose.model("House", houseSchema);
export default House;
