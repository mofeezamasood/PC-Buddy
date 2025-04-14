import { Schema, model } from "mongoose";
import ICpuCooler from "../types/models/ICpuCooler";

const cpuCoolerSchema = new Schema<ICpuCooler>(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['air', 'liquid', 'aio'], required: true },
    numberOfFans: { type: Number, min: 0, max: 5 },
    minFanSpeed: { type: Number, min: 0, max: 1000, required: true },
    maxFanSpeed: { type: Number, min: 1001, max: 4000, required: true },
    size: { type: Number, min: 30, max: 500, required: true },
    rgb: { type: Boolean, required: true },
    price: { type: Number, min: 0, max: 200000, required: true },
    status: { type: Boolean, required: true },
    score: { type: Number, required: true, default:0 },
  },
  {
    timestamps: true,
  },
);

export default model<ICpuCooler>('CpuCooler', cpuCoolerSchema);
