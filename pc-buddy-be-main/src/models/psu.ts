import { Schema, model } from 'mongoose';
import IPSU from '../types/models/IPsu';

const psuSchema = new Schema<IPSU>(
  {
    name: { type: String, required: true },
    powerCapacity: { type: Number, min: 120, max: 10000, required: true },
    efficiencyRating: {
      type: String,
      // enum: ['80+ gold', '80+ plat', '80+ silver', '90+ gold', '90+ plat', '90+ silver', 'none'],
      required: true,
    },
    connectors: { type: Number, min: 1, max: 20, required: true },
    modularity: {
      type: String,
      // enum: ['non-modular', 'semi-modular', 'fully-modular'],
      required: true,
    },
    price: { type: Number, min: 0, max: 300000, required: true },
    status: { type: Boolean, required: true },
    score: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

export default model<IPSU>('PSU', psuSchema);
