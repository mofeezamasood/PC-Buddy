import { Schema, model } from 'mongoose';
import IGPU from '../types/models/IGpu';

const gpuSchema = new Schema<IGPU>(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ['integrated', 'discrete', 'desktop'],
      required: true,
    },
    busInterface: { type: String, required: true },
    coreClock: { type: Number, max: 2500, required: true },
    memoryType: { type: String, required: true },
    memoryCapacity: { type: Number, min: 128, max: 100000, required: true },
    directX: { type: Number, min: 1, max: 15, required: true },
    openGL: { type: Number, min: 1, max: 15, required: true },
    tdp: { type: Number, min: 5, required: true },
    numberOfPorts: { type: Number, min: 0, max: 5, required: true },
    price: { type: Number, min: 0, max: 1000000, required: true },
    status: { type: Boolean, required: true },
    score: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

export default model<IGPU>('GPU', gpuSchema);
