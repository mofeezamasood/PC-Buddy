import { Schema, model } from 'mongoose';
import IStorage from '../types/models/IStorage';
const storageSchema = new Schema<IStorage>(
  {
    name: { type: String, required: true },
    type: { type: String, 
      // enum: ['hdd', 'ssd'], 
      required: true },
    capacity: { type: Number, required: true },
    readSpeed: {
      type: Number,
      required: true,
    },
    writeSpeed: {
      type: Number,
      required: true,
    },
    formFactor: {
      type: String,
      // enum: ['2.5-inch', '3.5-inch', 'm.2', 'u.2'],
      required: true,
    },
    price: { type: Number, min: 0, max: 500000, required: true },
    status: { type: Boolean, required: true },
    score: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

export default model<IStorage>('Storage', storageSchema);
