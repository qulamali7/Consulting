import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({
  icon: String,
  title: String,
  text: String,
});

export const ServiceModel = mongoose.model("services", serviceSchema);
