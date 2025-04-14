interface ICpuCooler {
  name: string;
  type: 'air' | 'liquid' | 'aio';
  numberOfFans: number;
  minFanSpeed: number;
  maxFanSpeed: number;
  size: number;
  rgb: boolean;
  price: number;
  status: boolean;
  score: number;
}

export default ICpuCooler;
