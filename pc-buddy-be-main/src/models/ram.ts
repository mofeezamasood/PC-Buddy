import { Schema, model } from 'mongoose';
import IRAM from '../types/models/IRam';

const ramSchema = new Schema<IRAM>(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      // enum: ['ddr', 'ddr2', 'ddr3', 'ddr4', 'ddr5'],
      required: true,
    },
    capacity: { type: Number, 
      // enum: [2, 4, 8, 16, 32, 64, 128],
       required: true },
    readSpeed: { type: Number, min: 400, max: 8000, required: true },
    writeSpeed: { type: Number, min: 400, max: 8000, required: true },
    latency: { type: Number, min: 5, max: 200, required: true },
    ecc: { type: Boolean, required: true },
    rgb: { type: Boolean, required: true },
    price: { type: Number, min: 0, max: 100000, required: true },
    status: { type: Boolean, required: true },
    score: { type: Number, required: true, default:0 },
  },
  {
    timestamps: true,
  },
);

export default model<IRAM>('RAM', ramSchema);
