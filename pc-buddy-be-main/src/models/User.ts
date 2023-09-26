import { Schema, model, models } from "mongoose";
import IUser from "../types/models/IUser";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema) || models.User;
