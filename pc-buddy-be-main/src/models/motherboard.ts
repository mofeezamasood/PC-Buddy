import { Schema, model } from 'mongoose';
import IMotherboard from '../types/models/IMotherboard';

const motherboardSchema = new Schema<IMotherboard>(
  {
    name: { type: String, required: true },
    socket: { type: String, required: true },
    formFactor: {
      type: String,
      // enum: ['atx', 'micro-atx', 'mini-itx'],
      required: true,
    },
    chipset: { type: String, required: true },
    ramSlots: { type: Number, min: 1, max: 50, required: true },
    ramType: {
      type: String,
      // enum: ['ddr2', 'ddr3', 'ddr4', 'ddr5'],
      required: true,
    },
    storageInterfaces: { type: Number, min: 0, max: 10, required: true },
    audioChipset: { type: String, required: true },
    wifi: { type: Boolean, required: true },
    bluetooth: { type: Boolean, required: true },
    price: { type: Number, min: 0, max: 1000000, required: true },
    status: { type: Boolean, required: true },
    score: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

export default model<IMotherboard>('Motherboard', motherboardSchema);
