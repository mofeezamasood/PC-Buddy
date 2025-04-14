import { Schema, model, models } from 'mongoose';
import IProcessor from '../types/models/IProcessor';

const processorSchema = new Schema<IProcessor>(
  {
    name: { type: String },
    type: { type: String },
    cores: { type: Number, min: 1, max: 128 },
    threads: { type: Number, min: 1, max: 256 },
    baseClock: { type: Number, min: 1.0, max: 6.0 },
    boostClock: { type: Number, min: 2.0, max: 7.0 },
    cache: { type: Number, min: 1, max: 128 },
    tdp: { type: Number, min: 5, max: 500 },
    architecture: { type: Number, min: 1, max: 28 },
    socket: { type: String },
    integratedGraphics: { type: Boolean },
    overClockable: { type: Boolean },
    price: { type: Number, min: 0, max: 3000000 },
    status: { type: Boolean },
    score: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

export default model<IProcessor>('Processor', processorSchema) || models.User;

// const processorSchema = new Schema<IProcessor>(
//   {
//     name: { type: String, required: true },
//     type: { type: String, enum: ['desktop', 'laptop', 'server', 'workstation'], required: true },
//     cores: { type: Number, min: 1, max: 128, required: true },
//     threads: { type: Number, min: 1, max: 256, required: true },
//     baseClock: { type: Number, min: 1.0, max: 5.0, required: true },
//     boostClock: { type: Number, min: 2.0, max: 7.0, required: true },
//     cache: { type: Number, min: 1, max: 128, required: true },
//     tdp: { type: Number, min: 5, max: 500, required: true },
//     architecture: { type: Number, min: 1, max: 28, required: true },
//     socket: { type: String, required: true },
//     integratedGraphics: { type: Boolean, required: true },
//     overClockable: { type: Boolean, required: true },
//     price: { type: Number, min: 0, max: 3000000, required: true },
//     status: { type: Boolean, required: true },
//     score: { type: Number, required: true, default: 0 },
//   },
//   {
//     timestamps: true,
//   },
// );
